let count = 1;
setInterval(async () => {
    console.log('setInterval :>> ', new Date(), count);
    await new Promise(resolve => setTimeout(() => {
        console.log('new Date() :>> ', new Date(), count);
        resolve();
        count += 2;
    }, 1000));
}, 500);

// const callInterval = async () => {
//     try {
//       const [err, result, selectorImages] = await this.getRecord();
//       if (!err && !result) {
//         setTimeout(callInterval, this.intervalTime);
//       }
//       if (err !== undefined) {
//         log.info("errerrerr", err);
//         if (err.err === "CANCELED") {
//           resolve(result);
//         } else {
//           reject(err);
//         }
//       }
//       if (result !== undefined) {
//         result.selectorImages = selectorImages;
//         resolve(result);
//       }
//     } catch (err) {
//       setTimeout(callInterval, this.intervalTime);
//     }
//   };
//   callInterval();