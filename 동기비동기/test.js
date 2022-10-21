const promise = new Promise((resolve, reject) => {
    // promise가 만들어지면 executor함수는 자동으로 실행된다.
        setTimeout(()=>{
            resolve('입장해주세요');
        }, 5000);
    }); // 3초후 일이 성공적으로 끝났다는 신호와 함께 result는'입장해주세요'가 된다.

    console.log(promise);