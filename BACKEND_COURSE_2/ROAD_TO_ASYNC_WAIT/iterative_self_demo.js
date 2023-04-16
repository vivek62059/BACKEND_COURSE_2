function fetchNextElement(array){
    let idx=0;
    function next(){
        if(idx==array.length){
            return unndefined;
        }
        const nextElement=array[idx];
        idx++;
        return nextElement;
    }
    return {next};
}

//somewhere we consume it

const automaticFetcher=fetchNextElement([6,4,3,0,5,9,1,2,4]);//inside automatic fetcher variable we can store next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
