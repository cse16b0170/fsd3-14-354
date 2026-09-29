const b1={
  picUrl: "https://imgs.search.brave.com/48J4YveDPnEPuYkeKoBtCjADHsGGqKA0zomviVEKB-o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aXMtaXMtZ3VuYWhv/bi1rYS1kZXZ0YS1p/cy1vdmVycmF0ZWQt/aS1hbS1hbG1vc3Qt/YXQtdjAta2RoYnhm/NTlnYWdkMS5qcGVn/P3dpZHRoPTY0MCZj/cm9wPXNtYXJ0JmF1/dG89d2VicCZzPWNk/ZjliMWZjNGUxNzBh/NTA0ZTA3ZjM5Mjc1/ODIwZjk0NmJmNDlj/ZTM",
  bname:"React Design Pattern",
  price: 1199,
  quantity:10,
  rating:5.0,
}


function Book(){
  return (
    <div>
      <img
      src={b1.picUrl}
      alt={b1.bname}
      />
    <h1>Let us react</h1>
    <h2>Price: 765.00</h2>
    <h3>Quantity: 5</h3>
    <h4>Rating: 5.0</h4>
    </div>
  )
}

export default function App(){
  return (
  <>
  <Book/>
  <h1>Hello React</h1>
  <Book />
  <Book />
  <Book />
  </>
  )
}