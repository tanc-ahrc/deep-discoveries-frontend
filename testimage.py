#!/usr/bin/env python
# This is a quick way to test the selection encoding/decoding
# Example usage:
# 1) Hack getSimilar() in BasicSearchResults to dump
#    selection_encodings to the console
# 2) Copy a string from the array as dumped to the console
# 3) xsel --clipboard --output | sed 's/^.//' | sed 's/.$//' | ./testimage.py
# (The sed bit is chopping the quote marks off)
#
# Alternatively, to avoid using Python at all:
# xsel --clipboard --output | sed 's/^.*\*//' | sed 's/.\{341\}/&\n/g'
# Where 341 is the width of the image.

import fileinput
import numpy as np
from PIL import Image

def next_star():
  global encoded
  i = encoded.index('*')
  result = encoded[0:i]
  encoded = encoded[i+1:]
  return result

encoded = ''
with fileinput.input() as f:
  for line in f: encoded += line

aid = next_star()
width = int(next_star())
height = int(next_star())
image = encoded
print(f'Asset ID: {aid}')
print(f'Width: {width}')
print(f'Height: {height}')

#Following https://stackoverflow.com/a/2659378
pixels = np.zeros((height, width), np.int32)
for y in range(0, height - 1):
  for x in range(0, width - 1):
    if encoded[y * width + x] == '1': pixels[y][x] = 0xffffff
img = Image.fromarray(pixels, 'I')
img.show()

