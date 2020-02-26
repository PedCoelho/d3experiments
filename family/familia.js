function flatToHierarchy (flat) {

        var roots = [] // things without parent
    
        // make them accessible by guid on this map
        var all = {}
    
        flat.forEach(function(item) {
          all[item.name] = item
          if(item.spouse){
            all[item.name].marriages = [{
                // spouse: {
                //   name: item.spouse,
                //   class: "node"
                // } 
              }]
          }
          
          delete all[item.name].filhos
          delete all[item.name].spouse
          //fazer a limpa
        })
        
    
        // connect childrens to its parent, and split roots apart
        Object.keys(all).forEach(function (el) {
            var item = all[el]
            if (item.parent == "none") {
                roots.push(item)
            } else if (item.parent in all) {
                var p = all[item.parent]
                if('marriages' in p){
              if (!('children' in p.marriages[0])) {
                    p.marriages[0].children = []
                }
                p.marriages[0].children.push(item)
            }                
          }
        })
        // done!
        return roots
      }
