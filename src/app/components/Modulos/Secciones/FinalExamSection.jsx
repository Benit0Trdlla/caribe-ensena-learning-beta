import { getSession } from '@auth0/nextjs-auth0';
import Certificado from "../../Certificado"
export const FinalExamSection = async () => {
    const { user } = await getSession();

    return (
        <div className="final-exam-section">
            <h1>Final Exam Section</h1>
            <p>{user.nickname}</p>
            <Certificado nombre={user.nickname}/>
        </div>
    )
}