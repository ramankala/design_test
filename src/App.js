import './App.css';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

function App() {


  return (
    <div class = 'h-screen w-screen flex-auto gap-4 bg-gray-300'>
      <div id = 'firstCard' class = 'flex-auto border-2 justify-center items-center bg-white m-2'>
        <div id = 'firstRow' class = 'flex flex-row'>
          <div id = 'newUsers' class = 'flex-auto flex-col border-2'>
            <div class = 'flex justify-between m-2'>
              <div class = 'm-2 font-medium'>New Users</div>
              <img src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/fX3//Pz/0dH/+fn/4+P/zc3/8PD/9PT/+vr/ior/r6//3d3/5+f/7e3/PT3/qKj/UFD/eHj/Rkb/HR3/wcH/mpr/XFz/yMj/IyP/g4P/DQ3/sbH/Jib/lJT/uLj/lZX/Li7/bW3/1tb/U1P/SUn/oaH/QED/ZWX/cXH/aGj/Xl7/Njb/f3//trY/TSeiAAAH5ElEQVR4nO2diXbiOgyGSUM2yEIKWSCBhH1v3//tLtDOlMuW2LEseU6/B2j9HwdJliW51ZKB3nGCRRxOu2eKJCwt07eNjpT/DY8ReHGRzrRb8uM8tExbx15fQwwvTtLoTt1fZnPXMrEX2QC/LN6fq/sm2q6HNvZK+Vgk21GlvgvHXRhgr5YdLxvk9fRdNnKZKKbR6d+bltfkxzX2ohnQ3RfG5TmbIfbCa6JbSx59Z96UsKvBesIrUNNWpYG9/koWfX59J/Ipdc8RrxoJPNH3sDW8xD02FahpqYWt4gXrmi7+NQO6NnXN4ONfMSMq0ViL0XdiQlOiK0zgKVJdYKt5QMwVxzxjRc/3L1gD0Qq2DraiGwzuSO0ZXWxJN2SiBWrRGFvT/xgL/RF+MaBkbUzh3+iZDzo/xU4XQqAWfWIL+8tQQDT6iJSKy7A/YARqWkgkmzoEMDNfbGikp5w5lMDTJmKLu+DBCdQiEp/pDlAhiU30IQVqPWx5JwpQhVobW1+rJfhMccsbtr5WG1agtkEP3cC8/TejGFvhAFihliELbDdI4dcjRY5rEkEJxOcckfNugBHbNxGu0/dBjr7/p4sauQ178ArnqD/EEOzg9MMKNawBDtkuTDA9oi4+ifgAF1FhAG9KT2AWaSwkmNJTVIMYmloSTKmmbX08hTF4zHZmhXiz/wkes53BvEwcyxCoTRAdoshr3+dEiApDKQpzxPITcbUJvwqR0JNfhaorlPSV/vu2FFOhHH/473v82T8ftfUQFZZSIm/Ms4Wc0xNmSYa1kaFwjngC9qRkMT4Qy/flZKISxKS3nGwi6sWFjIwwar5USlYfNefdioHrFM68o9aZeo2bgKrZoXZCOVt4hcgF39ClGOh3wBJMTQ/5Ht8DNzVL7BpT8HqaPrLAVrOW0Wpy9PrLEljhDL2a3QZW+I4tEPyHSKD9CTijSKA1CLYKeoYt70z1gJYGEPhIgVOK6Jb0jA+YUlyR6LdwAJ0+kS5LOKefk/hIoforz2BWQ12jQ10j5mQGD1hAHZa4tbPXOEAnfSJ25kwJckOTEppUY4MkpAoSzvAbUXNbriHVj98yAPKmJELSH8QHpxvEW8OHCD8IF9iKbokFC5yR8YV/0FOxCtFTbPeIbSYdEJy9Zwi9LSXQ4HyPJ7A1ISO4hSfGwtx+j1C8dk0g6rCfu5TitWtEtdDsyHmKP+hrIbeJA5Jm5gshZwzsS9/XmAI2cU7Tjv6hed5tRPZH+E1je0p5PusFp2F8SvpH+IXXqOY0o+oJr9DjBrlFOvnDV+gud+ZtSTRau8XgHTKIXRxUH+fAJTBS6O0Ak6tSaoe9bBZ4vtMR4XD0Hp4qGwKVMyxw+H1iGeAqODLEyhjSL0x2hUo4+x8cdoUKxGvXGMyh2wR7yYwYzCmbAfaSGTGYfb5izqLlMKczVFPIPnqXwixWFtjzNSPsJTOyZ1ao0U6x3WKwC9QUOf1+wzMwg9y19iu4zocbhYIagytpmhMq8qqgE/I9bPWuyi/RWfN2e/XVOF54c+7bmXyuwC4G/Ua3T1GfSN3zE5yhgPvDwWdA1Kg6XihoSkaUWT49kX6cieyXfV+3Sb1lqbfXW9EFprO3MRmz45QZSIdevuzGFLoRdPcAN4ZndgixNeohy9vUHOQ9zMdldb+QMPhD0+ZtnKOjYXalzME6kyK8L+8s4F9FuGYfyy371tsFUCPQc7auxIDOK8AnKTwgP6wlfas2ir6LxnQsI5pzsfSdiVLwO7ghaOd2HbagzULeG7a+M10wkxPwlwKJZVKCpDuMIUceG4r5UHyYYxZENvCL41RwBKCXS6khTDV5KnRQnZPxZUBBmQh8Jgl+3BUfPUFG1ZAztZuLUITBMaFnXTUia2xw9KGUMbP87BvW+3VcKW/lNOG9bLSDtJzgY2ZNCm9Bn/oVRp5w7yChMO0lOecFuS24dxmSrMMh0FdlBy902TPHwhpC5ZAnrL7f4e2ZwCIP2aJUXW42VARRyaSwlJKuF8uIJQ6HHtkJA0v9JnpCjY/6/QxynnESz6xu/6kp5V0OCOY1vaJqjuKHSVlLoKfor/BMvbqxUDlX+EOtlyJsEpl7XqY1greFhAcd4FjWcPtyXqmCIqpxMyXnLTUwqhV2CGdH61CdenOkPHAER7VCxU6+d1QrVCt5cU8NhXzTAsjwq/BXIX1qKJTwRhUkv7b05A/VuI15SrVCG/6dMVCqFYodQyqfGlfCct7aBqOGwljBdPcPdSafmkq7izpZDJAJ8rLY1KrMgHtyBJ6i3l2wuptYu5NYykvNANSf7epjFqs3IKsrsNVaKFAodM+epVqhlN4S05yUrYgvVu5DZe50txTzGR/s1bS+SseofM3Va+oSLO5+zIZ3vHKwVULjiKPk6y/xnrzfmOybNXs54z5pjaP5Z+Nu7yDuEm1G0LRjNxbSAeUsQpKuYxl6wrr19aBdENvIWdEWPQNF9+h8rbOuB9Qua4b7zQT19JhPevsQdiSIYSW7dIOSrRr10l1iSRmU4bTd6cd2IzEcGA22b4VrSZ2sYPjtMkyyQw94O6PeIUvCsu3jzMbQbXNhDcfT/kH8dxtt0n4xHloL08YfqWTYgW96Vuwm2S5dHUfctigfHQfpLkvccrgw/cCmNw5T1/WOYTh2cFK8aMelu54W3eztBR/dYroOP+PTVvknSY5hdE5/ROSa/gMeQLc7kjetGwAAAABJRU5ErkJggg==' class = 'h-12' alt='new users'/>
            </div>
            <div class = 'm-2 text-3xl font-medium'>1.39K</div>
            <div class = 'flex m-2'>
            <img src = 'https://media.istockphoto.com/vectors/growth-arrow-icon-green-arrow-up-vector-id1300548408?k=20&m=1300548408&s=170667a&w=0&h=c1JLE_TZkKX3lkz0joFxdyApE2B5_Vcq1RiTd_4lul4=' class = 'h-12' alt='stock rising'/>
              <div class = 'm-2 text-green-500'>147%</div>
              <div class = 'm-2 text-gray-500'>VS PREV. 28 DAYS</div>
            </div>
          </div>

          <div id = 'uniqueUsers' class = 'flex-auto flex-col border-2'>
            <div class = 'flex justify-between m-2'>
              <div class = 'm-2 font-medium'>Unique Users</div>
              <img src = 'https://uploads-ssl.webflow.com/60071c0508bc4a20037efe09/6039cb8c77575b977e1e8471_star.svg' class = 'h-12' alt='unique users' />
            </div>
            <div class = 'm-2 text-3xl font-medium'>1.52K</div>
            <div class = 'flex m-2'>
            <img src = 'https://media.istockphoto.com/vectors/growth-arrow-icon-green-arrow-up-vector-id1300548408?k=20&m=1300548408&s=170667a&w=0&h=c1JLE_TZkKX3lkz0joFxdyApE2B5_Vcq1RiTd_4lul4=' class = 'h-12' alt='stock rising'/>
              <div class = 'm-2 text-green-500'>53%</div>
              <div class = 'm-2 text-gray-500'>VS PREV. 28 DAYS</div>
            </div>
          </div>
        </div>

        <div id = 'secondRow' class = 'flex flex-row'>
          <div id = 'wk1Retention' class = 'flex-auto flex-col border-2'>
          <div class = 'flex justify-between m-2'>
            <div class = 'm-2 font-medium'>Week 1 Retention</div>
            <img src = 'https://media.istockphoto.com/vectors/fire-flame-blue-icon-vector-id918191876?k=20&m=918191876&s=170667a&w=0&h=npVBouPpMtFtJmmf-PRLYn9ZMmHwjbUb8YYk4kCZgog=' class = 'h-12' alt='week 1 retention' />
          </div>
            <div class = 'm-2 text-3xl font-medium'>4.53%</div>
            <div class = 'flex m-2'>
              <img src = 'https://pixlok.com/wp-content/uploads/2022/02/Decrease-Icon-SVG-098767.png' class = 'h-12' alt='stock decrease'/>
              <div class = 'm-2 text-red-500'>10.7%</div>
              <div class = 'm-2 text-gray-500'>VS PREV. 28 DAYS</div>
            </div>
          </div>
          <div id = 'session' class = 'flex-auto flex-col border-2'>
            <div class = 'flex justify-between m-2'>
              <div class = 'm-2 font-medium'>Session</div>
              <img src = 'https://www.pngitem.com/pimgs/m/79-796423_orange-clock-png-icons-transparent-png.png' class = 'h-12' alt='session' />
            </div>
            <div class = 'm-2 text-3xl font-medium'>0.9 sec</div>
            <div class = 'flex m-2'>
            <img src = 'https://media.istockphoto.com/vectors/growth-arrow-icon-green-arrow-up-vector-id1300548408?k=20&m=1300548408&s=170667a&w=0&h=c1JLE_TZkKX3lkz0joFxdyApE2B5_Vcq1RiTd_4lul4=' class = 'h-12' alt='stock rising'/>
              <div class = 'm-2 text-green-500'>29%</div>
              <div class = 'm-2 text-gray-500'>VS PREV. 28 DAYS</div>
            </div>
          </div>
      </div>
        </div>

      <div id = 'secondCard' class='flex-auto border-2 justify-center items-center bg-white m-2'>
        <div class = 'flex flex-row justify-between m-2'>
          <div class = 'm-2 font-medium text-xl'>Views</div>
          <div class = 'flex flex-row m-2 border-2 rounded-lg'>
            <div class = ' border-2 p-2 gap-2 rounded-lg bg-gray-200'>Day</div>
            <div class = 'border-2 p-2 gap-2 rounded-lg'>Week</div>
            <div class = 'border-2 p-2 gap-2 rounded-lg'>Month</div>
          </div>
        </div>
        <div class = 'flex'>
          <div class = 'm-2 text-3xl font-medium'>12.7K</div>
          <div>
            <div class = 'flex'>
              <img src = 'https://media.istockphoto.com/vectors/growth-arrow-icon-green-arrow-up-vector-id1300548408?k=20&m=1300548408&s=170667a&w=0&h=c1JLE_TZkKX3lkz0joFxdyApE2B5_Vcq1RiTd_4lul4=' class = 'h-12' alt='stock rising'/>
              <div class = 'm-2 text-green-500'>2.6%</div>
            </div>
            <div class = 'm-2 text-gray-300 text-sm'>VS PREV. DAY</div>
          </div>

        </div>
        <div id = 'chartContainer' class = 'container mx-auto'>
          <Line 
            data={{
                labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
                datasets: [{
                    label: '',
                    data: [1800, 2400, 2300, 2200, 2000, 1700],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  }]
            }}
              height = {200}
              width = {200}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
