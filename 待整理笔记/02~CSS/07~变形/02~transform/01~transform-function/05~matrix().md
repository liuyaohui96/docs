
## matrix()
1. matrix()
2. matrix3d()

## matrix()
matrix() 用六个指定的值来指定一个均匀的二维（2D）变换矩阵
```css
/* matrix(a, b, c, d, tx, ty) 是 
    matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1) 的简写 */
/* a b c d 以<number> 格式描述线性变换 */
/* tx ty 以 <number> 的格式来描述变换的量 */
matrix(a, b, c, d, tx, ty)
```
## matrix3d()
matrix3d() 用一个 4 × 4 的齐次矩阵来描述一个三维（3D）变换
```css
/* a1 b1 c1 d1 a2 b2 c2 d2 a3 b3 c3 d3 d4 以 <number> 的格式来描述线性变换 */
/* a4 b4 c4 以 <number> 的格式来描述变换的量 */
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```