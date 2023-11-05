/* tarjetas */
import tarjetas from '../data/tarjetas.json';

<div className="features">
{tarjetas.map(item => (
  <Card key={item.key} title={item.title} description={item.description} />
))}
</div>




/* yarn add @tensorflow/tfjs */
/* yarn remove @tensorflow/tfjs */

/* yarn add firebase-admin */
/* Firebase */
/* firebase login */
/* firebase init */
/* firebase deploy */
/*  */
/*  */