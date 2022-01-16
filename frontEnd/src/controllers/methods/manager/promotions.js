import { Manager } from '../../classes/index.js';

const manager = new Manager();

var $ = (className) => {
    return document.querySelector(className);
  };

  const getPromo = async ()=>{
    await manager.getPromotion();
    if(manager.data){
        console.log(manager.data);
        $('tbody').innerHTML = "";
        manager.data.map((e,index)=>{
            let tr = document.createElement('tr');
            tr.innerHTML =` 
            <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <span class="ml-3 font-bold text-blueGray-600">
              ${e.product.name}
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            ${e.product.category.name}
             
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            ${e.pourcentage} %
             
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            ${e.status}
              <!-- <i class="fas fa-circle text-orange-500 mr-2"></i> -->
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex">${e.createdAt}</div>
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <a
                href="#pablo"
                class="text-blueGray-500 block py-1 px-3"
                onclick="openDropdown(event,'table-light-1-dropdown')"
              >
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <div
                class="hidden bg-white text-base z-50 float-left  list-none text-left rounded shadow-lg min-w-8"
                id="table-light-1-dropdown"
              >
              <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
             id="accept"
            
            >
              Accept
            </button>
            <input type="text" value="${e.id}" hidden="true"/>
              </div>
            </td>
          </tr>
            
            `;
            $('tbody').appendChild(tr);
        });
    }
        }

        getPromo();
  
    $('#accept').addEventListener('click',async(e)=>{
          e.preventDefault();
    
    await manager.updatePromotion($('#accept').value)
      location.reload();
    console.log(manager);
    })
        
