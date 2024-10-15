"""
Write a function string_to_integer_mapping() that takes in a string of digits s as a parameter and returns a list 
where each element is the integer value of the corresponding digit in the string.

def string_to_integer_mapping(s):
    pass
Example Input: s="12345"
Example Output: [1, 2, 3, 4, 5]
"""
# PLANNING
"""
1) Create an empty result list
2) For each character
  a) Convert that character to an int
  b) Add that int to the result list
3) Return the result list
"""

def string_to_integer_mapping(s):
    new_list = []
    for i in s: # for each letter in the string
        i = int(i) # set that letter to an integer
        new_list.append(i) # add that new integer into the new_list
    return new_list # return the new_list

# Time Complexity: O(n), where n is the length of the string "s". This is due to the for loop implementation that goes through s.
# Space Complexity: O(n), where n is the length of the string, because the resulting list new_list grows in size 
# proportionally to the input string.
# Completion: 5 minutes
 
s = "12345"
print(string_to_integer_mapping(s))
# Outputs: [1, 2, 3, 4, 5]


