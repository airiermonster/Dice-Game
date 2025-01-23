import DiceGame from "@/components/DiceGame";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#393E46]">
      <DiceGame />
      <footer className="absolute bottom-4 text-white">
        Maximilian Urio's dice game made with{" "}
        <span className="inline-block animate-bounce">❤️</span> in Tanzania
      </footer>
    </div>
  );
};

export default Index;