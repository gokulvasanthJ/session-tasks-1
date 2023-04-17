

//step 01:create a function:

//label code:
function createelement(tagname,attrname,attrvalues,content){
    let element=document.createElement(tagname)
    element.setAttribute(attrname,attrvalues)
    element.innerHTML=content
    return element;
    }
    
    
    //linebreake code:
    function linebreakers(tagname){
        let linebreak=document.createElement(tagname);
        return linebreak;
    }
    
    
    //Input element code:
    
    function inputelement(tagname,attrname,attrvalues,attrname1,attrvalues1){
    let fnameinput=document.createElement(tagname)
    fnameinput.setAttribute(attrname,attrvalues)
    fnameinput.setAttribute(attrname1,attrvalues1)
    return fnameinput;
    }
    
    var element=createelement("label","for","firstname","Firstname");
    var linebreak=linebreakers("br");
    var fnameinput=inputelement("input","type","Text","id","firstname")
    var linebreak1=linebreakers("br");
    
    var element1=createelement("label","for","Middname","Middname");
    var linebreak2=linebreakers("br");
    var Mnameinput1=inputelement("input","type","Text","id","Middname")
    var linebreak3=linebreakers("br");
    
    var element2=createelement("label","for","Middname","lastname");
    var linebreak4=linebreakers("br");
    var lnameinput2=inputelement("input","type","Text","id","lastname")
    var linebreak5=linebreakers("br");
    
    var element3=createelement("label","for","mail","Email");
    var linebreak6=linebreakers("br");
    var mailinput3=inputelement("input","type","email","id","mail")
    var linebreak7=linebreakers("br");
    
    var element4=createelement("label","for","statename","Statename");
    var linebreak8=linebreakers("br");
    var stateinput4=inputelement("input","type","Text","id","statename")
    var linebreak8=linebreakers("br");
    
    document.body.append(element,linebreak,fnameinput,linebreak1,element1,linebreak2,Mnameinput1,linebreak3,element2,linebreak4,lnameinput2,linebreak5,element3,linebreak6,mailinput3,linebreak7,element4,linebreak8,stateinput4)
    
    //line breaker oru oru node kkuthan kudukkanum.label is one node and input is one node: