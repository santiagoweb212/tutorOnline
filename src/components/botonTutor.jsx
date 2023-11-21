function BotonTutor({texto}){
    return(
    <button
        type="submit"
        className="w-full font-bold bg-yellow text-black text-xl py-2 px-4 rounded hover:bg-yellowBlack"
    >
    {texto}
    </button>
    );
}

export default BotonTutor;
