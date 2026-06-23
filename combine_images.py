import os
from PIL import Image, ImageDraw

def solve_linear_system(A, B):
    n = len(A)
    M = [A[i] + [B[i]] for i in range(n)]
    for i in range(n):
        max_el = abs(M[i][i])
        max_row = i
        for k in range(i+1, n):
            if abs(M[k][i]) > max_el:
                max_el = abs(M[k][i])
                max_row = k
        M[i], M[max_row] = M[max_row], M[i]
        
        # Guard against division by zero
        if abs(M[i][i]) < 1e-10:
            raise ValueError("Matrix is singular or nearly singular")
            
        for k in range(i+1, n):
            c = -M[k][i] / M[i][i]
            for j in range(i, n+1):
                if i == j:
                    M[k][j] = 0
                else:
                    M[k][j] += c * M[i][j]
                    
    x = [0 for _ in range(n)]
    for i in range(n-1, -1, -1):
        x[i] = M[i][n] / M[i][i]
        for k in range(i-1, -1, -1):
            M[k][n] -= M[k][i] * x[i]
    return x

def find_coeffs(pa, pb):
    # pa is list of 4 destination points [(x0, y0), ...]
    # pb is list of 4 source points [(x0, y0), ...]
    A = []
    B = []
    for i in range(4):
        x_dst, y_dst = pa[i]
        x_src, y_src = pb[i]
        A.append([x_dst, y_dst, 1, 0, 0, 0, -x_dst * x_src, -y_dst * x_src])
        B.append(x_src)
        A.append([0, 0, 0, x_dst, y_dst, 1, -x_dst * y_src, -y_dst * y_src])
        B.append(y_src)
    return solve_linear_system(A, B)

def combine_screenshot(bg_path, screenshot_path, dest_pts, output_path):
    print(f"Compositing {screenshot_path} onto {bg_path} -> {output_path}")
    bg = Image.open(bg_path).convert("RGBA")
    screenshot = Image.open(screenshot_path).convert("RGBA")
    
    src_w, src_h = screenshot.size
    src_pts = [
        (0, 0),          # TL
        (src_w, 0),      # TR
        (src_w, src_h),  # BR
        (0, src_h)       # BL
    ]
    
    # Calculate coefficients to warp screenshot into dest_pts
    coeffs = find_coeffs(dest_pts, src_pts)
    
    # Warp the screenshot to the size of the background
    warped = screenshot.transform(bg.size, Image.PERSPECTIVE, coeffs, Image.BICUBIC)
    
    # Create a mask for the warped screen area to paste it perfectly
    mask = Image.new("L", bg.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.polygon(dest_pts, fill=255)
    
    # Combine the background and warped screenshot
    combined = Image.composite(warped, bg, mask)
    
    # Save the result as RGB (since jpeg/png depending on output_path)
    combined.convert("RGB").save(output_path, "JPEG", quality=90)
    print("Success!")

# Let's define the screen coordinates on the 2926x2081 image
# Based on the refined points (using the aligner values):
# TL: 10.08%, 17.08% -> (294.9, 355.4)
# TR: 78.51%, 10.25% -> (2297.2, 213.3)
# BR: 80.45%, 71.64% -> (2354.0, 1490.8)
# BL: 14.78%, 77.20% -> (432.5, 1606.5)
bg_w, bg_h = 2926, 2081
pts = [
    (10.08 * bg_w / 100.0, 17.08 * bg_h / 100.0), # TL
    (78.51 * bg_w / 100.0, 10.25 * bg_h / 100.0), # TR
    (80.45 * bg_w / 100.0, 71.64 * bg_h / 100.0), # BR
    (14.78 * bg_w / 100.0, 77.20 * bg_h / 100.0)  # BL
]

if __name__ == "__main__":
    bg = "public/pexels-introspectivedsgn-7484736.jpg"
    
    projects = [
        ("momentum", "public/project/momentum.png", "public/project/momentum_combined.jpg"),
        ("swiftride", "public/project/swiftride.png", "public/project/swiftride_combined.jpg"),
        ("velora", "public/project/velora.png", "public/project/velora_combined.jpg"),
    ]
    
    for name, src, dst in projects:
        if os.path.exists(src):
            combine_screenshot(bg, src, pts, dst)
        else:
            print(f"Skipping {name}: {src} not found")
