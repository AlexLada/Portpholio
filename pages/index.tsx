import Spline from '@splinetool/react-spline';
import { tw } from 'tailwindcss-typescript';

export default function App() {
  return (
    <div className="">
      <div className="w-full h-full object-cover absolute mix-blend-overlay">
        <Spline scene="https://prod.spline.design/CoInuO9XnqHRnWq8/scene.splinecode" />
      </div>
      <div className="w-96 h-96 bg-slate-100 inline-flex ml-16 mt-16 rounded-2xl shadow-xl shadow-indigo-800">
        <h1>
          sdpgisgisgigsi
        </h1>
      </div>
      <div className="">
        <Spline scene="https://prod.spline.design/joVPvgbaOt9LMkEW/scene.splinecode" />
      </div>
    </div>
  );
}
