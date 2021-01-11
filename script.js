function showRes() {  
  var s1 = document.getElementById("select1").value;
  var s2 = document.getElementById("select2").value;
  var s3 = document.getElementById
  ("select3").value;
  var s4 = document.getElementById
  ("select4").value;
  var s5 = document.getElementById
  ("select5").value;
  
  if (s3 == "under 600") {
    var itemList = [cpuDb['low'], mboardDb['low'], memDb['low'], storageDb['low'], gpuDb['low'], caseDb['low'], psuDb['low']]
  } else if (s3 == "above 800") {
    var itemList = [cpuDb['high'], mboardDb['high'], memDb['high'], storageDb['high'], gpuDb['high'], caseDb['high'], psuDb['high']]
  } else {
    var itemList = [cpuDb['medium'], mboardDb['medium'], memDb['medium'], storageDb['medium'], gpuDb['medium'], caseDb['medium'], psuDb['medium']]
  }

  if (s1 == "Machine Learning") {
    itemList[0] = cpuDb['high'];
  } else if (s1 == "Video Game") {
    itemList[4] = gpuDb['medium'];
  } else if (s1 == "Art graph design") {
    itemList[4] = gpuDb['high'];
  }

  if (s4 == "250G") {
    itemList[3] = storageDb['low'];
  } else if (s4 == "More than 2T") {
    itemList[3] = storageDb['high'];
  } else {
    itemList[3] = storageDb['medium'];
  }

  var price = 0  
  for (var i = 0; i < itemList.length; i++) {
    console.log(itemList[i].price)
    price = price + parseFloat(itemList[i].price.slice(1, -1));    
  }    
  document.getElementById("price").innerHTML = "$" + price.toString();
  document.getElementById("formDiv").style.display = "none";
  document.getElementById("res_div").style.display = "block";
  itemList.forEach(
    function(item) {
      document.getElementById("result_table").innerHTML = document.getElementById("result_table").innerHTML + '<tr><td>' + item.name + '</td><td>' + item.price + '</td><td><img src="' + item.picture + '" with="180" height="180" class="center"></img></td><td>' + '<button type="button" class="btn btn-primary"><a class="buylink" href="' + item.link + '">Buy</a></button></td></tr>';
    }
  );
  
  //var item = cpuDb['low'];
  //document.getElementById("result_table").innerHTML = document.getElementById("result_table").innerHTML + '<tr><td>' + item.name + '</td><td>' + item.price + '</td><td><img src="' + item.picture + '" with="200" height="200"></img></td></tr>';  
  //.append('<tr><td>' + item.name + '</td><td>' + item.price + '</td><td><img src="' + item.image + '"></img></td></tr>');
  //$('#result_table').append('<tr><td>' + item.name + '</td><td>' + item.price + '</td><td><img src="' + item.image + '"></img></td></tr>');
}

var cpuDb = {
  'low' : {
    'name' : 'AMD Ryzen 3 3100 4-Core',
    'link' : 'https://www.amazon.com/AMD-Ryzen-3100-8-Thread-Processor/dp/B0876Y2TMZ',
    'price' : '$144.99',
    'picture' : 'img/cpu1.jpg'
  }, 
  
  'medium' : {
    'name' : 'AMD Ryzen 5 3600 6-Core',
    'link' : 'https://www.amazon.com/AMD-Ryzen-3600-12-Thread-Processor/dp/B07STGGQ18',
    'price' : '$199.99',
    'picture' : 'img/cpu2.jpg'
  },

  'high' : {
    'name' : 'AMD-Ryzen 9 5950X 4th Gen 16-core',
    'link' : 'https://www.amazon.com/AMD-Ryzen-Processor-32-Threads-Architecture-Technology/dp/B08S6VCNZS/',
    'price' : '$1,299.99',
    'picture' : 'img/cpu3.jpg'
  }  
}

var mboardDb = {
  'low' : {
    'name' : 'GIGABYTE B450M DS3H V2',
    'link' : 'https://www.amazon.com/GIGABYTE-B450M-DS3H-V2-Motherboard/dp/B08KWMXGQW/',
    'price' : '$72.99',
    'picture' : 'img/mboard1.jpg'
  }, 
  
  'medium' : {
    'name' : 'ASUS TUF Gaming B550-PLUS',
    'link' : 'https://www.amazon.com/ASUS-TUF-B550-PLUS-Motherboard-Addressable/dp/B088W57M4J',
    'price' : '$155.99',
    'picture' : 'img/mboard2.jpg'
  },

  'high' : {
    'name' : 'MSI Godlike AM4 AMD X570 ATX DDR4-SDRAM',
    'link' : 'https://www.amazon.com/MSI-Godlike-X570-DDR4-SDRAM-Motherboard/dp/B07ST23K9B',
    'price' : '$1,129.99',
    'picture' : 'img/mboard3.jpg'
    }
  }

  var memDb = {
  'low' : {
    'name' : 'OLOy DDR4 RAM 16GB (2x8GB)',
    'link' : 'https://www.amazon.com/OLOy-288-Pin-Desktop-Gaming-MD4U0832160BJ0DA/dp/B088T2KNZ4',
    'price' : '$73.99',
    'picture' : 'img/mem1.jpg'
  }, 
  
  'medium' : {
    'name' : 'Corsair Vengeance LPX 16GB',
    'link' : 'https://www.amazon.com/Corsair-Vengeance-3200MHz-Desktop-Memory/dp/B0143UM4TC',
    'price' : '$83.99',
    'picture' : 'img/mem2.jpg'
  },

  'high' : {
    'name' : 'Corsair VENGEANCE RGB PRO 32GB',
    'link' : 'https://www.amazon.com/Corsair-Vengeance-2x16GB-PC4-28800-Optimized/dp/B082DGZJ9C',
    'price' : '$168.99',
    'picture' : 'img/mem3.jpg'
    }
  }

  var storageDb = {
    'low' : {
    'name' : 'SanDisk Ultra 3D NAND 500GB',
    'link' : 'https://www.amazon.com/SanDisk-Ultra-NAND-500GB-Internal/dp/B072R78B6Q',
    'price' : '$59.99',
    'picture' : 'img/storage1.jpg'
  }, 

  'medium' : {
    'name' : 'WD_Black 500GB SN750',
    'link' : 'https://www.amazon.com/BLACK-SN750-500GB-Internal-Gaming/dp/B07MH2P5ZD',
    'price' : '$64.99',
    'picture' : 'img/storage2.jpg'
  },

  'high' : {
    'name' : 'Seagate BarraCuda 2TB Internal Hard Drive',
    'link' : 'https://www.amazon.com/Seagate-BarraCuda-Internal-Drive-3-5-Inch/dp/B07H2RR55Q',
    'price' : '$89.24',
    'picture' : 'img/storage3.jpg'
    }
  }

  var gpuDb = {
    'low' : {
    'name' : 'EVGA GeForce GTX 1650 KO Ultra',
    'link' : 'https://www.amazon.com/EVGA-GeForce-Gaming-04G-P4-1457-KR-Backplate/dp/B08CPL5BB1',
    'price' : '$289',
    'picture' : 'img/gpu1.jpg'
  }, 

  'medium' : {
    'name' : 'MSI Gaming GeForce RTX 2060 Super',
    'link' : 'https://www.amazon.com/MSI-GeForce-Architecture-Overclocked-Graphics/dp/B07YXQ19NC',
    'price' : '$400',
    'picture' : 'img/gpu1.jpg'
  },

  'high' : {
    'name' : 'ASUS ROG Strix NVIDIA GeForce RTX 3090',
    'link' : 'https://www.amazon.com/ASUS-Graphics-DisplayPort-Axial-tech-2-9-Slot/dp/B08J6GMWCQ',
    'price' : '$1499',
    'picture' : 'img/gpu3.jpg'
    }
  }

  var caseDb = {
    'low' : {
    'name' : 'Cooler Master MasterBox MB311L',
    'link' : 'https://www.amazon.com/Cooler-Master-MasterBox-Micro-ATX-Tempered/dp/B0842TKK19',
    'price' : '$59.99',
    'picture' : 'img/case1.jpg'
  }, 

  'medium' : {
    'name' : 'Cooler Master MasterBox TD500 Mesh',
    'link' : 'https://www.amazon.com/Cooler-Master-Crystalline-Controller-MCB-D500D-KGNN-S01/dp/B0839Y7933',
    'price' : '$99.99',
    'picture' : 'img/case2.jpg'
  },

  'high' : {
    'name' : 'Lian Li O11DXL-W O11 Dynamic',
    'link' : 'https://www.amazon.com/Lian-Li-O11DXL-W-Tempered-Retail/dp/B07XLF7TBR',
    'price' : '$253.99',
    'picture' : 'img/case3.jpg'
    }
  }

  var psuDb = {
    'low' : {
    'name' : 'EVGA 110-BQ-0500-K1',
    'link' : 'https://www.amazon.com/dp/B01N3OAFHD',
    'price' : '$59.99',
    'picture' : 'img/psu1.jpg'
  }, 

  'medium' : {
    'name' : 'Corsair CX Series 650 Watt 80 Plus Bronze',
    'link' : 'https://www.amazon.com/Corsair-Bronze-Certified-Modular-CP-9020103-NA/dp/B01B72W1VA',
    'price' : '$89.99',
    'picture' : 'img/psu2.jpg'
  },

  'high' : {
    'name' : 'Corsair RM805x 850w 80+ Gold Fully Modular',
    'link' : 'https://www.amazon.com/CORSAIR-RM850x-Certified-Modular-Supply/dp/B079H5WNXN',
    'price' : '$144.99',
    'picture' : 'img/psu3.jpg'
    }
  }