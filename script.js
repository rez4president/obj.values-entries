
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'




let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr.Grinch"
}

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace("username", "");
})

let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')

/// The output came on the same line because we convert the object into a string.

///You'll need two joins because .map returns a array.

Lets split the the solution up into peaces:

Object.entries(obj).map(value => value.join(" ")).join(' ')



Object.entries(obj)

This part of the code takes an object and converts it into an iterable. This means instead of having key: value , every key:value pair gets split up into its single array. It looks like this:


Lets move on to the next step.



Object.entries(obj).map(value => value.join(" "))

Because we now have an array of arrays, we can now use the .map array method.

What it does is, that value holds on each loop run one array which consists of [key,value]. Because we want to built an complete sentence, we need to join this array.

If the .map over the array of arrays is finished we have this result:


Now, the last part of the code.

Object.entries(obj).map(value => value.join(" ")).join(' ')

The last step is, to join the array which the .map method returns. This will create the complete sentence.


////  Just to make sure I got it right:
Object.entries(obj).map(value => value.join(" "))

So the first .join(" ") is to covert the three arrays into strings, 
then behind the scene push the three strings into one array 
and the second .join(" ") is to convert the second array into one string sentence.