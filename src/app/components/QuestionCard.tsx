import { Question } from '../data/questions';

interface QuestionCardProps {
    question : Question;
}

export default function QuestionCard({ question } : QuestionCardProps) {
    return (
        <div className="p-4"> 
            <div>{question.id} . {question.question}</div>

            <div className="flex flex-col gap-2 p-2">
                {
                    question.options.map((option, index) => (
                        <button key={index} className="text-left">
                            {String.fromCharCode(97 + index)}. {option}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}