var English=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
        ["some students like to study at night","at night some students like to study"],
        ["John and Mary went to church","Mary and John went to church"],
        ["John went to church after eating","after eating John went to church","John after eating went to church"],
        ["did he go to market","he did go to market"],
        ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
        ["John goes to the library and studies","John studies and goes to the library"],
        ["John ate an apple so did she","she ate an apple so did John"],
        ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
        ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
var Eng=["John ate an apple before afternoon","at night some students like to study","John and Mary went to church","John after eating went to church","he did go to market","the woman who sells cosmetics called my sister","John goes to the library and studies","she ate an apple so did John","the teacher noticed the error after she returned the book","I told her that I bought a book yesterday"];
var Hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
        ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
        ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
        ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
        ["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
        ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
        ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var Hin=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"];
    function select()
    {
             random_e=Eng[Math.floor(Math.random()*Eng.length)];
             e_arr=random_e.split(" ");
             random_h=Hin[Math.floor(Math.random()*Hin.length)];
             h_arr=random_h.split(" ");
             document.getElementById("reform").style.visibility="hidden";
             document.getElementById("correct").style.visibility="hidden";
             document.getElementById("form").innerHTML="";
             document.getElementById("ans").innerHTML="";
             document.getElementById("sent").innerHTML="";
             document.getElementById("button").innerHTML="";
             document.getElementById("answer").innerHTML="";
             document.getElementById("getans").innerHTML="Get Correct Sentence";
             document.getElementById("getans").style.visibility="hidden";

        if(document.getElementById("eng").selected)
        {
            document.getElementById("button").innerHTML="";
            document.getElementById("p1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
            document.getElementById("p2").innerHTML="(select the buttons in proper order)";
             var body=document.getElementById("button");
            var e,index, c=e_arr.length;
            for(i=0;i<c;i++)
            {
	            index=Math.floor(Math.random()*c)
	            temp=e_arr[i];
	            e_arr[i]=e_arr[index]
              e_arr[index]=temp;
            }
            for(i=0;i<c;i++)
            {
              var button = document.createElement("button");
              button.id=i;
              button.innerHTML = e_arr[i]
              body.appendChild(button);
          
            button.addEventListener("click",function()
            {
               var disp=0;
               document.getElementById("form").innerHTML="Formed Sentences <span style='font-style:italic;color:#0000ff;font-size:15px;font-weight:lighter'> (after selecting words):</span>";
               document.getElementById("sent").innerHTML+=this.innerHTML+" ";
               this.style.display="none";
               disp++;
               if(disp>0)
                 document.getElementById("reform").style.visibility="visible";
                 var a=String(document.getElementById("sent").innerHTML).replace(/\s+/, "");
                 a1=a.split(" ");
               if(e_arr.length == a1.length)
               {
                  document.getElementById("correct").style.visibility="visible";
               }
               
            });
        }
        }
        else if (document.getElementById("hin").selected) 
        {
            
            document.getElementById("p1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
            document.getElementById("p2").innerHTML="(select the buttons in proper order)";
            var index, c=h_arr.length
            var body=document.getElementById("button");
            for(i=0;i<c;i++)
            {
	            index=Math.floor(Math.random()*c)
	            temp=h_arr[i];
	            h_arr[i]=h_arr[index]
              h_arr[index]=temp;
              
            }
            for(i=0;i<c;i++)
            {
              var button = document.createElement("button");
              button.id=i;
              button.innerHTML = h_arr[i]
              body.appendChild(button);
              button.addEventListener("click",function()
              {
               var disp=0;
               document.getElementById("form").innerHTML="Formed Sentences<span style='font-style:italic;color:#0000ff;font-size:15px;font-weight:lighter'>(after selecting words):</span>";
               document.getElementById("sent").innerHTML+=this.innerHTML+" ";
               this.style.display="none";
               disp++;
               if(disp>0)
               {
                 document.getElementById("reform").style.visibility="visible";
                }
                var b=String(document.getElementById("sent").innerHTML).replace(/\s+/, "");
                b1=b.split(" ");
              if(h_arr.length == b1.length)
              {
                 document.getElementById("correct").style.visibility="visible";
              }
              });
              
            }
          }
        else{
            document.getElementById("p1").innerHTML="";
            document.getElementById("p2").innerHTML="";
            document.getElementById("button").innerHTML="";
        }
    }
    function reform()
    {
      document.getElementById("answer").innerHTML="";
      document.getElementById("ans").innerHTML="";
      i=0;
       while(i<e_arr.length || i<h_arr.length)
        {
            if(document.getElementById(i).style.display=="none")
            {
                document.getElementById(i).style.display="inline";
        }
       
        document.getElementById("form").innerHTML="";
        document.getElementById("sent").innerHTML="";
        var reform=document.getElementById("reform");
        var correctness=document.getElementById("correct");
        reform.style.visibility="hidden";
        correctness.style.visibility="hidden";
        document.getElementById("getans").style.visibility="hidden";

        i++;
        
        }
    }
    function correctness()
    {
      var sentence=String(document.getElementById("sent").innerHTML).replace(/\s+$/,"");
      var match=0;
      if(document.getElementById("eng").selected)
      {
        for(var i=0;i<English.length;i++)
        {
          for(var j=0;j<English[i].length;j++)
          {
            if (sentence==English[i][j])
            {
              match=1;
            }
          }
        }
        if(match==1)
        {
          document.getElementById("ans").innerHTML="<span style='color:green; font-style: font-size:30px'>Right answer!!!</span>";
        }
        else
        {
         document.getElementById("ans").innerHTML="<span style='color:red; font-size:30px'>Wrong answer!!!</span>";
         document.getElementById("getans").style.visibility="visible";
        }
      }
        
      else if(document.getElementById("hin").selected)
        {
          for(var i=0;i<Hindi.length;i++)
          {
            for(var j=0;j<Hindi[i].length;j++)
            {
              if (sentence==Hindi[i][j])
              {
                match=1;
              }
            }
          }
          if(match==1)
          {
            document.getElementById("ans").innerHTML="<span style='color:green; font-size:35px'>Right answer!!!</span>";
          }
          else
          {
           document.getElementById("ans").innerHTML="<span style='color:red; font-size:35px'>Wrong Answer!!!</span>"
           document.getElementById("getans").style.visibility="visible";
          }
        }
      }
    function answer()
    {
      find_e=Eng.indexOf(random_e);
      sen_e= English[find_e];
      find_h=Hin.indexOf(random_h);
      sen_h= Hindi[find_h];
      if(document.getElementById("eng").selected)
      {
        if(document.getElementById("getans").innerHTML == "Get Correct Sentence")
        {
            for(i=0;i<sen_e.length;i++)
            {
                document.getElementById("answer").innerHTML+=sen_e[i]+"<br>";
                document.getElementById("getans").innerHTML="Hide Correct Sentence"
            }
        }
        else if(document.getElementById("getans").innerHTML == "Hide Correct Sentence")
        {
            document.getElementById("answer").innerHTML="";
            document.getElementById("getans").innerHTML="Get Answers";
        }
        else if(document.getElementById("getans").innerHTML == "Get Answers")
        {
            for(i=0;i<sen_e.length;i++)
            {
                document.getElementById("answer").innerHTML+=sen_e[i]+"<br>";
                document.getElementById("getans").innerHTML = "Hide Correct Sentence";
            }
        }
    }
    else if(document.getElementById("hin").selected)
    {
      if(document.getElementById("getans").innerHTML == "Get Correct Sentence")
        {
            for(i=0;i<sen_h.length;i++)
            {
                document.getElementById("answer").innerHTML+=sen_h[i]+"<br>";
                document.getElementById("getans").innerHTML="Hide Correct Sentence"
            }
        }
        else if(document.getElementById("getans").innerHTML == "Hide Correct Sentence")
        {
            document.getElementById("answer").innerHTML=""
            document.getElementById("getans").innerHTML="Get Answers"
        }
        else if(document.getElementById("getans").innerHTML == "Get Answers")
        {
            for(i=0;i<sen_h.length;i++)
            {
                document.getElementById("answer").innerHTML+=sen_h[i]+"<br>";
                document.getElementById("getans").innerHTML = "Hide Correct Sentence"
            }
        }
    }
}
      

    