/**
* Kata Name : Format a string of names like Bart Lisa  Maggie
* Kyu Level : 6 kyu
* Kata Description : Given: an array containing hashes of names
*                    Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*                    Example:
*                    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
*                    # returns 'Bart, Lisa & Maggie'
*                    
*                    list([ {name: 'Bart'}, {name: 'Lisa'} ])
*                    # returns 'Bart & Lisa'
*                    
*                    list([ {name: 'Bart'} ])
*                    # returns 'Bart'
*                    
*                    list([])
*                    # returns ''
*                    
*                    list([ %{name: "Bart"}, %{name: "Lisa"}, %{name: "Maggie"} ])
*                    # returns 'Bart, Lisa & Maggie'
*                    
*                    list([ %{name: "Bart"}, %{name: "Lisa"} ])
*                    # returns 'Bart & Lisa'
*                    
*                    list([ %{name: "Bart"} ])
*                    # returns 'Bart'
*                    
*                    list([])
*                    # returns ''
*                    
*                    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
*                    // returns 'Bart, Lisa & Maggie'
*                    
*                    list([ {name: 'Bart'}, {name: 'Lisa'} ])
*                    // returns 'Bart & Lisa'
*                    
*                    list([ {name: 'Bart'} ])
*                    // returns 'Bart'
*                    
*                    list([])
*                    // returns ''
*                    
*                    namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
*                    # returns 'Bart, Lisa & Maggie'
*                    
*                    namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
*                    # returns 'Bart & Lisa'
*                    
*                    namelist([ {'name': 'Bart'} ])
*                    # returns 'Bart'
*                    
*                    namelist([])
*                    # returns ''
*                    
*                    Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/
let list = names => {
    let newArray = [];
    for(let i = 0; i<names.length; i++){
        if(i == names.length - 2){
            newArray.push(`${names[i].name} & ${names[i+1].name}`)
            break;
        } else {
            newArray.push(`${names[i].name}`);
        }
    }
    return newArray.join(', ');
}