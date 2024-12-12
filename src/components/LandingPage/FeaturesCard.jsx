const FeaturesCard = () => {

    return (
        <div className='pt-44 flex flex-row gap-x-12 justify-center'>
        <div className=" p-6 rounded-lg shadow-md w-[25rem] border border-gray-500">
            <img src="src\assets\LandingPageImg\QuizManagement.png"></img>
            <h2 className="text-white font-bold text-3xl text-center mb-4">Quiz Management</h2>
            <p className="text-gray-400 text-center text-sm">
                No more hassle on creating quizzes. With Thinkeroo's quiz management, 
                you can easily create and modify quizzes! You can also select and assign 
                quizzes to one or more of your handled classes!
            </p>
        </div>

        <div className=" p-6 rounded-lg shadow-md w-[25rem] border border-gray-500">
            <img src="src\assets\LandingPageImg\DataBank.png" className="mt-8"></img>
            <h2 className="text-white font-bold text-3xl text-center mb-4 mt-12">Data Bank</h2>
            <p className="text-gray-400 text-center text-sm">
            Having trouble of repeatedly entering the same questions whenever you create a quiz? 
            With Thinkeroo’s built-in data bank, you can easily store all the questions and
            answers of the quizzes you create!
            </p>
        </div>

        <div className=" p-6 rounded-lg shadow-md w-[25rem] border border-gray-500">
            <img src="src\assets\LandingPageImg\AntiCheating.png"></img>
            <h2 className="text-white font-bold text-3xl text-center mb-4">Anti Cheating
            Monitor</h2>
            <p className="text-gray-400 text-center text-sm">
            Worried that your student might do something that is against your class rules?
             Anti cheating monitors are provided. It can detect those nasty Alt + Tabs
              and many more cheating methods!
            </p>
        </div>
        </div>
    )


}

export default FeaturesCard