   paragraph=[] 
    function join1(){
        for(i=1;i<=6;i++){
            paragraph.push(document.getElementById("div1_input_box_"+i).value)
            
        }

        para_1=paragraph.join(" . ")
        document.getElementById("showParagraph1").innerHTML=para_1
   
}

paragraph2=[]
function join2(){
    for(i=1;i<=6;i++){
        paragraph.push(document.getElementById("div2_input_box_"+i).value)
        
    }

    para_2=paragraph.join(" . ")
    document.getElementById("showParagraph2").innerHTML=para_2;

}
