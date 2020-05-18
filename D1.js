/*

1)
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sum(a, b) {
    let sumOf;
    if (a==b) {
       sumOf = (a + b) * 3;
    } else {
        sumOf  = a + b;
    }
  
   return sumOf

}

console.log(sum(3, 2));
console.log(sum(2, 2));


/*
2)
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function check(a, b) {
    if (a == 50 && b  == 50 || (a + b == 50)) {
        return true
    } else {
        return false
    }
}
console.log(check(2, 4));

/*
3)
Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
*/
function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(remove_character("Python",0));
console.log(remove_character("Python",3));
console.log(remove_character("Python",5));


/*
4)
 Write a JavaScript program to find the largest of three given integers.
*/
function largest(a, b, c) {
    let max = 0;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    if (c > max) {
        max = c;
    } 

    return max
      
}
console.log(largest(3, 45, -19));
/*
5)
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function numbers_ranges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
        || 
        (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers_ranges(44, 56));
  console.log(numbers_ranges(70, 95));
  console.log(numbers_ranges(50, 89));
/*
6) 

Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
*/
function repeaitStr(str, n) {
    if (n < 0) {
        return false
    } else {
        return str.repeat(n);
    }
}
console.log(repeaitStr('Oksana', 4));
/*
7)
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function displayStr(str) {
   if (str.slice(0, 3) == 'Los' || str.slice(0, 3) == 'New') {
       console.log(str); 
   } else {
       return false;
   }
}

console.log(displayStr('Los-Angeles'));
console.log(displayStr('Ukraine'));
/*
8)
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
*/
function sum_three(nums)
{
  return nums[0] + nums[1] + nums[2];
}

console.log(sum_three([10, 32, 20]));  
console.log(sum_three([5, 7, 9])); 
console.log(sum_three([0, 8, -11]));

/*
9)
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function contins13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contins13([1, 5]));  
console.log(contins13([2, 3]));  
console.log(contins13([7, 5])); 
/*

10)

Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function notContins13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return false
    } 
    else
    {
       return true
    }
}

console.log(notContins13([1, 5]));  
console.log(notContins13([2, 3]));  
console.log(notContins13([7, 5])); 

/*
11)

Write a JavaScript to find the longest string from a given array of strings.
*/
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  console.log(longest_string(['a', 'aa', 'aaa',
                                            'aaaaa','aaaa']))

/*
12)

Write a JavaScript program to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */
   function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle.";
    }
    if(angle === 90) {
      return "Right angle.";
    }
    if(angle < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }
  
  console.log(angle_Type(47))
  console.log(angle_Type(90))
  console.log(angle_Type(145))
  console.log(angle_Type(180))
  

    /*

13)

Write a JavaScript program to find the index of the greatest element of a given array of integers
*/
var arr = [0, 21, 22, 7];

const indexOfMaxValue = arr.indexOf(Math.max(...arr));
console.log(indexOfMaxValue);

/*

14)

Write a JavaScript program to get the largest even number from an array of integers.
*/
function max_even(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(max_even([20, 40, 200]));
  console.log(max_even([20, 40, 200, 301]));
  

/*
15)

Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30)) 
/*
16)

Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
*/
function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));

/*
17)

Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function upper_lower(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);  
    return front_part + back_part;
  }
  console.log(upper_lower("Python"));
  console.log(upper_lower("Py"));
  console.log(upper_lower("JAVAScript"));

/*
18)

Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
function sortaSum(x, y) 
 {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  }
  return 80;
}

console.log(sortaSum(30,20));
console.log(sortaSum(90,80));

/*
19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".

20)
Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).

*/
