
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;

    this.map = new Map();
    for(let i=0;i<this.nums2.length;i++){
        this.map.set(this.nums2[i],(this.map.get(this.nums2[i])||0)+1);
    }
};

FindSumPairs.prototype.add = function(index, val) {
    let old = this.nums2[index];
    this.nums2[index] +=val;

    this.map.set(old,this.map.get(old)-1);
    if(this.map.get(old)==0) this.map.delete(old);
    this.map.set(old+val,(this.map.get(old+val)||0)+1);
    return this.nums2;
};

FindSumPairs.prototype.count = function(tot) {
    let count = 0;
  for(let i=0;i<this.nums1.length;i++){
    if(this.map.has(tot-this.nums1[i])){
        count +=this.map.get(tot-this.nums1[i]);
    }
}
    return count;
};