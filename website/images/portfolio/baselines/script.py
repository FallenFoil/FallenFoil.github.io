from PIL import Image

colorImage = Image.open("./engine2.png")
img = Image.open("./opengl.png")

for i in range(0,360,3):
    rotated = colorImage.rotate(i, resample=Image.BICUBIC)
    rotated.paste(img, (0,0), img)
    rotated.save(f"{i}.png")