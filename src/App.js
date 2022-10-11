import './App.css';
function App() {
  const info=[
    {Name:'srinibha srikanth', Batch:'2021-2025',Mail:'srinibha.srikanth@gmail.com',Team:'Social media'},
    {Name:'Aashritha Bibireddy',Batch:'2021-2025',Mail:'aashrithabibireddy@gmail.com',Team:'Social media'},
    {Name:'L.varunesh',Batch:'2021-2025',Mail:'lvarunesh26@gmail.com',Team:'Social media'},
    {Name:'S.Rishikesh',Batch:'2021-2025',Mail:'rishikeshsara03@gmail.com',Team:'Social media'},
    {Name:'R.Sai Adithya',Batch:'2021-2025',Mail:'aditxyaa@gmail.com',Team:'Social media'},
    {Name:'Neela Varun Gopal',Batch:'2021-2025',Mail:'varunvr2203@gmail.com',Team:'Social media'},
    {Name:'Kambhampati Sai Harsha Vardhan',Batch:'2021-2025',Mail:'harshaspartax18@gmail.com',Team:'Technical'},
    {Name:'Kodaru Jayanth',Batch:'2021-2025',Mail:'jayanthroy555@gmail.com',Team:'Technical'},
    {Name:'Suryateja Chittiprolu',Batch:'2021-2025',Mail:'suryatejach04@gmail.com',Team:'Technical'},
    {Name:'Imadabathuni Suhrutha',Batch:'2021-2025',Mail:'suhrutha2004@gmail.com',Team:'Technical'},
    {Name:'Shanmukhi',Batch:'2021-2025',Mail:'shanmukhikurapati2425@gmail.com',Team:'Technical'},
    {Name:'Chandrakethan Sivarsthri',Batch:'2021-2025',Mail:'s.chandrakethan9@gmail.com',Team:'Technical'},
    {Name:'N Sravya Reddy',Batch:'2021-2025',Mail:'Sravyareddy.n06@gmail.com',Team:'Events and PR'},
    {Name:'BIllakanti Krishna sai',Batch:'2021-2025',Mail:'krishnasaibillakanti08@gmail.com',Team:'Events and PR'},
    {Name:'Sri Swapnika Dodla',Batch:'2021-2025',Mail:'sriswapnikad@gmail.com',Team:'Events and PR'},
    {Name:'N.Siddharth Reddy',Batch:'2021-2025',Mail:'siddharthreddy210603@gmail.com',Team:'Events and PR'},
    {Name:'Sai Meghana Maradana',Batch:'2021-2025',Mail:'saimeghanait@gmail.com',Team:'Events and PR'},
    {Name:'Chilla Srivaibhav',Batch:'2021-2025',Mail:'srivaibhavchilla2923@gmail.com',Team:'Design'},
    {Name:'J.Vinish Reddy',Batch:'2021-2025',Mail:'vinishreddy1604@gmail.com',Team:'Design'},
    {Name:'Lalitha Bhavana M',Batch:'2021-2025',Mail:'lalithabhavana9@gmail.com',Team:'Design'},
    {Name:'Praneetha Madala',Batch:'2021-2025',Mail:'praneetha.Madala@gmail.com',Team:'Design'},
    {Name:'Komma vishal',Batch:'2021-2025',Mail:'kommavishal@gmail.com',Team:'Design'},
    {Name:'Potluri Srinija',Batch:'2021-2025',Mail:'srinijapotluri@gmail.com',Team:'Design'},
 ]
  return (
    <div className='container'>
      <h1 className="text-center "> VOLUNTEERS</h1>
      <p>
      Volunteers here at ACM are friendly and ready to help any of the member at any instant. Volunteers literally shoulder all the events conducted by ACM and that too with a lot of determination.
      </p>
      <p>
     <b> Technical Team:</b> Tech team deals with all the technical functionalities of ACM. Be it creating barcodes for the id cards and an app for its scanning, which is first ever in VNRVJIET, creating this website or creating simple excel sheets, itâ€™s all taken care by the tech team.
      </p>
      <p>
      <b>Social Media Team:</b> Social Media Team handles all the ACM accounts in various social media platforms. They conduct interesting and simple week contests to magnify the interest in technologies for all the followers. They even give many latest technical developments info. They combine fun and knowledge together to give the best.
      </p>
      <p>
      <b>Design Team:</b> Design Team adds color to ACM. They deal with designing things for ACM and how to make them look beautiful. They design all the posters, our templates and even our id cards. They fill everyone with their creative and colorful ideas.
      </p>
      <p>
      <b>Coding Team:</b> Coding Team imparts knowledge into the coding enthusiasts out there. Its motive is to spread the knowledge about the role of coding in one's life. It conducts upto 4 sessions in a month and coding contests will be held to better understand the willigness and interest of students and how far they are able to implement their logical thinking into the tests.
      </p>
      <p>
      Whichever team the volunteers are in at the end of the day they help each other support each other and share their workload. Volunteers of ACM are versatile, whatever is the work they do it with utmost dedication. They always look out to each other and are there for each other.
      </p>
       <table className='table table-bordered table-hover mx-auto m-1.5'> 
        <thead>
          <tr>
          <th >NAME </th>
          <th> TEAM</th>
          <th> EMAIL ID</th>
          <th> BATCH</th>
          </tr>
        </thead>
        <tbody> {info.map((value,key)=>{
            return (
              <tr key={key}>
              <td>{value.Name}</td>
              <td>{value.Team}</td>
              <td>{value.Mail}</td>
              <td> {value.Batch}</td>
              </tr>
            )})
        }
        </tbody>
       </table>
</div>
 );
      }
export default App;