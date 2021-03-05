/**
 * Sliding Window Pattern
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 */
const sameFrequency = (int1, int2) => {1
    let num, freqCounter1 = {}, freqCounter2 = {}
    while(int1 >= 1) {
      num = int1%10
      int1 = ~~(int1/10)
      freqCounter1[num] = (freqCounter1[num] || 0) + 1
    }

    while(int2 >= 1) {
      num = int2%10
      int2 = ~~(int2/10)
      freqCounter2[num] = (freqCounter2[num] || 0) + 1
    }
    console.log(freqCounter1);
    console.log(freqCounter2);

    for(let item in freqCounter1) {
      //Compare keys
      if(!(item in freqCounter2)) return false
      //Compare values
      if(freqCounter2[item] !== freqCounter1[item]) return false
    }
    return true
}