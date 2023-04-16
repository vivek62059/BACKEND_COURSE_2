const {Telegraf}=require('telegraf');
require('dotenv').config();
const bot=new Telegraf(process.env.BOT_TOKEN);
const binarySearchString=`
const binarySearch=function search(arr,x){
    let lo=0,hi=arr.length-1;
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2);
        if(arr[mid]==x)return mid;
        else if(arr[mid]<x){
            lo=mid+1;
        }else{
            hi=mid-1;
        }
    }
    return undefined;
}`;
try{
bot.start((ctx)=>ctx.reply('Welcome to vivek\'s Algo bot'));//start
bot.command('binarysearch',(ctx)=>ctx.reply());//binarysearch
bot.command('toplinuxcommands',(ctx)=>ctx.reply('ls cd pwd grep'));
bot.on('sticker',(ctx)=>ctx.reply('heart'));
bot.launch();
}
catch{
    console.log("unexpected command");
}