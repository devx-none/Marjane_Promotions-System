import { AdminCenter } from '../../classes/index.js';

const admin = new AdminCenter();

var $ = (className) => {
    return document.querySelector(className);
  };

  const getManagers = async ()=>{
    await admin.ListManagers();
    if(admin.data){
        console.log(admin.data);
        $('tbody').innerHTML = "";
        admin.data.map((e,index)=>{
            let tr = document.createElement('tr');
            tr.innerHTML =` 
            <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <span class="ml-3 font-bold text-blueGray-600">
              ${e.name}
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            ${e.email}
             
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
            ${e.category.name}
             
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
                class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                id="table-light-1-dropdown"
              >
                <a
                  href="#pablo"
                  class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Delete</a
                >
              </div>
            </td>
          </tr>
            
            `;
            $('tbody').appendChild(tr);
        });
    }
        }

        getManagers();
  
