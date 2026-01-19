import { Container } from "@/shared/ui/Container";
import styles from "./Restourants.module.scss";
import { Label } from "@/shared/ui/Label";
import RestourantItem from "./RestourantItem/RestourantItem";
import { restourants } from "../../model/items";

function Restourants() {
  return (
    <section className={styles.section}>
      <Container>
        <Label className={styles.label}>Restoranlar</Label>

        <div className={styles.items}>
          {restourants.map((el) => (
            <RestourantItem key={el.id} data={el} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Restourants;
