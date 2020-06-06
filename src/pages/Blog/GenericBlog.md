## random-messages-names
I can hardly think of names, random-messages-names generates random names and messages so I will leave it to the random.

### Install

```bash
npm i random-messages-names
```

### Usage

```javascript
let RandomMessagesNames = require('random-messages-names');

console.log(RandomMessagesNames.Msg()); 
/* output i.e: 
  Cai Burris park class to dam dollar Damien Maynard truthful as soon as metal he crush measure euphonium 
  Copeland hard two opinion Chapman x-ray liquid to hover chinese we lowly since buffer I behave print 
  station they inform eight butcher
*/

console.log(RandomMessagesNames.Name()); 
//output i.e: Christoph Pennington

console.log(RandomMessagesNames.FirstName());
//output i.e: Harry

console.log(RandomMessagesNames.LastName());
//output i.e: Chapman


const verbs = require('./verbs');
const names = require('./names');
const lastnames = require('./lastnames');
const nouns = require('./nouns');
const adjectives = require('./adjectives');
const numbers = require('./numbers');
const conjuctions = require('./conjuctions');
const subjects = require('./subjects');

const r = (values) =>(values[Math.floor(Math.random() * values.length)])

const FirstName = () => {
  return r(names);
}

const LastName = () => {
  return r(lastnames);
}

const Name = () => {
  return `${r(names)} ${r(lastnames)}`;
}


const Msg = () => { 
  const type1 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r(verbs)} ${r(nouns)} to ${r(verbs)} ${r(nouns)}`);
  const type2 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r(adjectives)} ${r(conjuctions)} ${r(nouns)}`);
  const type3 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r(verbs)} ${r(nouns)} ${r(nouns)}`);
  const type4 = () => (`${r([r(subjects),Name(),FirstName(),LastName()])} ${r([r(verbs),r(adjectives)])} ${r(numbers)} ${r(nouns)}`);
  const type5 = `${type1()} ${type2()} ${type3()} ${type4()}`
  const type6 = `${type5} ${type1()} ${type2()} ${type3()} ${type4()}`
  const Msg = r([type1(), type2(),type3(), type4(), type5, type6]);
  return Msg;

  var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";
    function validate()
	{
      var inputs = new Array();
      inputs[0] = document.getElementById('first').value;
      inputs[1] = document.getElementById('last').value;
      inputs[2] = document.getElementById('email').value;
      inputs[3] = document.getElementById('uid').value;
      inputs[4] = document.getElementById('password').value;
      inputs[5] = document.getElementById('confirm').value;
      var errors = new Array();
      errors[0] = "<span style='color:red'>Please enter your first name!</span>";
      errors[1] = "<span style='color:red'>Please enter your last name!</span>";
      errors[2] = "<span style='color:red'>Please enter your email!</span>";
      errors[3] = "<span style='color:red'>Please enter your user id!</span>";
      errors[4] = "<span style='color:red'>Please enter your password!</span>";
      errors[5] = "<span style='color:red'>Please confirm your password!</span>";
      for (i in inputs)
      {
        var errMessage = errors[i];
        var div = divs[i];
        if (inputs[i] == "")
        	document.getElementById(div).innerHTML = errMessage;
        else if (i==2)
        {
          var atpos=inputs[i].indexOf("@");
          var dotpos=inputs[i].lastIndexOf(".");
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
        	document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
          else
        	document.getElementById(div).innerHTML = "OK!";
        }
        else if (i==5)
        {
          var first = document.getElementById('password').value;
          var second = document.getElementById('confirm').value;
          if (second != first)
        	document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
          else
       		document.getElementById(div).innerHTML = "OK!";
        }
        else
        	document.getElementById(div).innerHTML = "OK!";
       }
     }
        function finalValidate()
        {
          var count = 0;
          for(i=0;i<6;i++)
          {
            var div = divs[i];
            if(document.getElementById(div).innerHTML == "OK!")
            count = count + 1;
          }
          if(count == 6)
          	document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
        }
} 

module.exports = { Name, LastName, Msg, FirstName };
```

### Install Package Globally
random-messages-names can also be installed globally so that all the projects on the computer can use it.

```bash
npm i -g random-messages-names
```

It can be used through the console with the following commands

```bash
random-name
random-firstname
random-lastname
random-msg
```

### Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [random-messages-names](https://github.com/MarcoMadera/random-messages-names.git)

### License
random-messages-names is released under the [MIT License](https://opensource.org/licenses/MIT).

```json
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
```