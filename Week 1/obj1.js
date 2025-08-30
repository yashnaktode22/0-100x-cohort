let users=[{gender:"male",fname:"yash"},//this here is a complex object;
    {gender:"male",fname:"yashwant"},
    {gender:"female",fname:"yasmin"},
]
for(i=0;i<users.length;i++){//for js always use "" for attribute and number in array should not be in"";
    if(users[i]["gender"]=="male"){
        console.log(users[i]["fname"]);
    }
}