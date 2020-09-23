# If Input State is Empty

1. user clicks operand --> return error

# If Input State has Number

1. if input state has 0 at start and user clicks 0 --> do nothing
2. user clicks number or decimal --> append number to current state
3. if input state has "." and user clicks "." --> do nothing
4. user clicks operand --> set output state to number and input operand in input state

# If Input State has Operand

1. if input state has operand and user hits \*, /, or + --> replace current operand with new
