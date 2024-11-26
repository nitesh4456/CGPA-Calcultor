let text =""
let marks1_core = prompt("Enter Core Subject 1 Marks obtained")/*marks obtained in particuler subject*/
let marks1_core_total = prompt("Enter Core subject 1 Total marks")/*total marks of the subject */
let marks2_core = prompt("Enter Core Subject 2 Marks obtained")
let marks2_core_total = prompt("Enter Core subject 2 Total marks")
let marks3_core = prompt("Enter Core Subject 3 Marks obtained")
let marks3_core_total = prompt("Enter Core subject 3 Total marks")
let marks_ge = prompt("Enter GE Subject Marks obtained")
let marks_ge_total = prompt("Enter GE subject  Total marks")
let marks_sec = prompt("Enter SEC Subject Marks obtained")
let marks_sec_total = prompt("Enter SEC subject Total marks")
let marks_vac = prompt("Enter VAC Subject Marks obtained")
let marks_vac_total = prompt("Enter VAC subject  Total marks")
let marks_aec= prompt("Enter AEC Subject Marks obtained")
let marks_aec_total = prompt("Enter AEC subject  Total marks")

let mark1=(marks1_core/marks1_core_total)*40 /*multipy by ten to get out of ten   samr as of 100 in percentage*/
let mark2=(marks2_core/marks2_core_total)*40
let mark3=(marks3_core/marks3_core_total)*40
let mark4=(marks_ge/marks_ge_total)*40
let mark5=(marks_sec/marks_sec_total)*20
let mark6=(marks_vac/marks_vac_total)*20
let mark7=(marks_aec/marks_aec_total)*20


let text1="" + marks1_core +" / "+ marks1_core_total
let text2="" + marks2_core +" / "+ marks2_core_total
let text3="" + marks3_core +" / "+ marks3_core_total
let text4="" + marks_ge +" / "+ marks_ge_total
let text5="" + marks_sec +" / "+ marks_sec_total
let text6="" + marks_vac +" / "+ marks_vac_total
let text7="" + marks_aec +" / "+ marks_aec_total

let output = (mark1 + mark2 + mark3 + mark4 + mark5 + mark6 + mark7)/22

text = text + output


document.getElementById('demo').innerHTML=text
document.getElementById('demo1').innerHTML=text1
document.getElementById('demo2').innerHTML=text2
document.getElementById('demo3').innerHTML=text3
document.getElementById('demo4').innerHTML=text4
document.getElementById('demo5').innerHTML=text5
document.getElementById('demo6').innerHTML=text6
document.getElementById('demo7').innerHTML=text7