class Mkulima{
    constructor(){
    this.producefarm = [];
    this.Vendor = [];
    this.product = [];
    this.addDifferentFarm = (farmId, farmName, farmer, phoneNumber, address) => {
    this.producefarm.push({farmId,farmName,farmer,phoneNumber,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.producefarm.find(item => item.farmId ===farmId);
    let farmIndex = this.producefarm.indexOf(specific);
    this.producefarm.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.producefarm.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phoneNumber =newPhoneNumber;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.producefarm.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specifiedProduct = this.product.find(item => item.productId ===productId)
    specifiedProduct.productId =newProductId;
    specifiedProduct.productName = newProductName;
    specifiedProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProduct = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specifiedProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specifiedProduct.productName} for KES ${quantity*specifiedProduct.price}`);
    }
    }
    }
    let newfarm = new Mkulima();
    newfarm.addDifferentFarm("24324","Lona","LonaFarm","254 720634421", "Karen");
    newfarm.addDifferentFarm("13545","Sabby","SabbyFarm","254 789123445", "Nakuru");
    newfarm.addDifferentFarm("8009","Runyejes","RunyejesFarm","254 74987603", "Embu");
    newfarm.addDifferentFarm("10008","Njogu","KilimambogoFarm","254 7875403", "Thika");
    console.log(newfarm.producefarm);
    newfarm.removeFarm("8009");
    console.log()