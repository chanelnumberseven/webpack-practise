import './style.css'
import src from '@/child.jpg'

const element=addImage(src);
element.onclick=async function(){
    const {doSomething}= await import(/* webpackChunkName: "handle" */'@/handle');
    doSomething();
}
setTimeout(function(){
    console.log('setTimeout');
},30)
setImmediate(function(){
    console.log('setImmediate')
},30)
process.nextTick(function(){
    console.log('nestTick');
})