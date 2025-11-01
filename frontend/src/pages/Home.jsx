import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return(
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-bold">GiorgiaSport — ¡Ropa deportiva de alto rendimiento!</h1>
          <p className="mt-4 text-gray-600">Equipamiento y ropa para futbol, running, entrenamiento y gym. Calidad y diseño pensados para deportistas de elite.</p>
          <Link to="/products" className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded">Ver productos</Link>
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSnHb9Kq9l5vE9olp8U-5KuJXNdh3CD2kEFuKujgkqADpwBfHGJiry8QKLej-CKpxkYF2hsNAACKkZWbfUVxIdBuTGDLqr38rm3EAsWpJk1zpqb120yQKoYnzctcIW2SmfHUJKLj-Hjp9dusZZ1vDPREllN8irerlBRCJlr0ZY-RTOmlDawGb7NDAUkwe0nuY7XCwwU3qXDsvTF2Wv_VWVPIYFtMI3COfqGNXBQ-BdFwhQEQL0_I88f6INeDoGV-LHT8-zBaEl3stPfwW9CyciZarmMVt50baOPeUZYiNn96yzLt63XRyBSCGeJetRLQlxNa9hj-gYb-0FeU66fMcfE8GeeLbSzYYlNqLQeDLNJvzAw547NLzo8GYjJksTpkEQO0n-gJj2qoktMW64-yIMxXnmFTZaEyn6WpbZU1Lif4JOkSLmSEJsIbh4D5bo827xj4ykpml5RkpbAA-SEJnNxgBOzIbiaOo0WAKy7sBeuFxDakHzhAgMQmWrrk3ikOhBMSu1JKGY4z_Orc_KCjpdEQ86W7WBIF1BFpY14MNTMKq0TmkL2TytzGnFQ4qCfhqoMYmyriaVNHeKKhN_FGbkwQHuTq2-Qj2ogmsNugsplaeiNqvNt_djFiJ3TohCz1I3BwWPKgFqh6Jh315JidijEEweMlwP0q3a2Gz9cBUJQkJBfAl0pk_nB692mSBvLn47hUG6PhUt4wa4OzyVmi-zTbFqvP87g2mBFy5oCvE6DMtqLexllIxbgrqB1qpUNrjglyKL2NaObLEPzoiED4AYc8rsaObGoWnXZCiFAnGyhnarUskdpiwS7Bhq1Lp7mGMronE8wUVPKnHzHZDPU0OEpAqrK9E7wfb4mmvI2U9uUyv2djx-Skn5EgPX6EtPcBNvb6w5P6VaKHW34E0Dd5nTtjvOsBc1aFicpyQi3b5yPKJrVsesZ2vguB6y_HD07_U7ui5Kn616pwAQGS88Hp7pEQygoEHcjOOL-RrE1hivVbHN57NEVCuATNg3RuTQZBAA8LQm6D5fr-zbDdDzjE6u4JLk1Opma7NLTq3JVBD3lWcD08W5C7Cuv-1D6P5liCMeDhNjokYNtNkk_8oLM2WTKXzj6OK6VDnMp_p426d1qss_942pHk6vAMMNrXlbvdLzNcvFTu1bzpNytHfbwOXyAnqp9WAO_5eOzDV894nMqvEFRFOw2J16kylhD_nYN8APu2VLsfNJDb1qKbbsSjFwp-WGb2a6cVc1gWled9=s1024-rj" alt="GiorgiaSport" className="w-full rounded" />
        </div>
      </div>
    </div>
  )
}