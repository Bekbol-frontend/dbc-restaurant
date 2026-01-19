import SearchIcon from "@/shared/assets/icons/search.svg";
import styles from "./SearchInput.module.scss";

function SearchInput() {
  return (
    <div className={styles.searchInput}>
      <img src={SearchIcon} alt="search" />
      <input type="text" placeholder="Restoran yoki taom nomini yozing..." />
    </div>
  );
}

export default SearchInput;
