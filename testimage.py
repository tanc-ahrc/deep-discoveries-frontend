#!/usr/bin/env python
#Following https://stackoverflow.com/a/2659378

import numpy as np
from PIL import Image

global encoded

def next_star():
  global encoded
  i = encoded.index('*')
  result = encoded[0:i]
  encoded = encoded[i+1:]
  return result

encoded = None
with open('dump') as f:
  encoded = f.read()

encoded = encoded[1:-1]
print(encoded)
aid = next_star()
url = next_star()
width = int(next_star())
height = int(next_star())
image = encoded
print(aid)
print(url)
print(width)
print(height)
print(encoded)
pixels = []
for x in range(0, width - 1):
  pixels.append([])
  for y in range(0, height - 1):
    p = 0
    #print(f'{x},{y}')
    if encoded[x * width + y] == '1':
      p = 1
      print(255)
    pixels[x].append(p)
img = Image.fromarray(np.array(pixels), '1')
img.show()


