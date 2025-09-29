
import './App.css'

function Home() {
  return <div className="p-4 bg-blue-200 rounded">🏠 Home</div>;
}

function About() {
  return <div className="p-4 bg-green-200 rounded">ℹ️ About</div>;
}

function Contact() {
  return <div className="p-4 bg-yellow-200 rounded">📞 Contact</div>;
}

export default function App() {
  const components = [<Home key="home" />, <About key="about" />, <Contact key="contact" />];

  return (
    <div className="space-y-4">
      {components.map((component) => component)}
    </div>
  );
}



