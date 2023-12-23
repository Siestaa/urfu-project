import { useState } from "react";
import styles from "./styles.module.css";
import ads from "../../ads.json";

interface IAdsCard {
  id: number
  title: string;
  img: string;
  price: number;
  description: string;
  url: string;
  city: string;
  region: string;
  date: string;
}

interface ISearchPanel {
  setAdsArray: (newAds: IAdsCard[]) => void;
}

const SearchPanel = (props: ISearchPanel) => {
  const [searchText, setSearchText] = useState<string>("");
  const [priceFromValue, setPriceFromValue] = useState<number | undefined>();
  const [priceToValue, setPriceToValue] = useState<number | undefined>();
  const [city, setCity] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [rangePrice, setRangePrice] = useState<number | undefined>();
  const sortArray = [
    "Сначала новые",
    "Сначала старые",
    "Сначала дорогие",
    "Сначала дешевые",
  ];
  const [currentSort, setCurrentSort] = useState<string>(sortArray[0]);
  const [hideSortList, setHideSortList] = useState<boolean>(true);
  const adsArray = [...ads.adsArray];

  const handleFilter = () => {
    const filterValues = [...document.querySelectorAll("input")];
    let filteredArray = [...adsArray];
    filterValues.map((filter) => {
      if (filter.value && filter.value !== "0") {
        switch (filter.name) {
          case "search":
            filteredArray = adsArray.filter((item) =>
              item.title.includes(filter.value)
            );
            break;
          case "priceFrom":
            filteredArray = adsArray.filter(
              (item) => item.price >= Number(filter.value)
            );
            break;
          case "priceTo":
            filteredArray = adsArray.filter(
              (item) => item.price <= Number(filter.value)
            );
            break;
        }
      }
    });
    props.setAdsArray(filteredArray);
  };

  return (
    <div className={styles.searchPanel}>
      <form className={styles.formPanel} method="get">
        <div className={`${styles.formItem} ${styles.formItemTitle}`}>
          <label className={styles.formLabel} htmlFor="search">
            Поиск товара
          </label>
          <div className={styles.inputContainer}>
            <input
              id="search"
              name="search"
              className={styles.formInput}
              type="search"
              required
              placeholder="Наименование товара"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.inputIcon}
            >
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className={styles.formItem}>
          <label className={styles.formLabel} htmlFor="priceFrom">
            Цена
          </label>
          <div className={styles.inputContainer}>
            <input
              id="priceFrom"
              name="priceFrom"
              className={`${styles.formInput}`}
              type="number"
              placeholder="От"
              value={priceFromValue}
              onChange={(e) => setPriceFromValue(Number(e.target.value))}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.inputIcon}
            >
              <path d="M15,2 C18.3137085,2 21,4.6862915 21,8 C21,11.2383969 18.4344251,13.8775718 15.2249383,13.9958615 L15,14 L10,14 L10,16 L14,16 C14.5522847,16 15,16.4477153 15,17 C15,17.5522847 14.5522847,18 14,18 L10,18 L10,21 C10,21.5522847 9.55228475,22 9,22 C8.44771525,22 8,21.5522847 8,21 L8,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 L8,16 L8,14 L4,14 C3.44771525,14 3,13.5522847 3,13 C3,12.4871642 3.38604019,12.0644928 3.88337887,12.0067277 L4,12 L8,12 L8,3 C8,2.44771525 8.44771525,2 9,2 L15,2 Z M15,4 L10,4 L10,12 L15,12 C17.209139,12 19,10.209139 19,8 C19,5.85780461 17.3160315,4.10892112 15.1996403,4.00489531 L15,4 Z" />
            </svg>
          </div>
          <span>-</span>
          <div className={styles.inputContainer}>
            <input
              id="priceTo"
              name="priceTo"
              className={styles.formInput}
              type="number"
              placeholder="До"
              value={priceToValue}
              onChange={(e) => setPriceToValue(Number(e.target.value))}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.inputIcon}
            >
              <path d="M15,2 C18.3137085,2 21,4.6862915 21,8 C21,11.2383969 18.4344251,13.8775718 15.2249383,13.9958615 L15,14 L10,14 L10,16 L14,16 C14.5522847,16 15,16.4477153 15,17 C15,17.5522847 14.5522847,18 14,18 L10,18 L10,21 C10,21.5522847 9.55228475,22 9,22 C8.44771525,22 8,21.5522847 8,21 L8,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 L8,16 L8,14 L4,14 C3.44771525,14 3,13.5522847 3,13 C3,12.4871642 3.38604019,12.0644928 3.88337887,12.0067277 L4,12 L8,12 L8,3 C8,2.44771525 8.44771525,2 9,2 L15,2 Z M15,4 L10,4 L10,12 L15,12 C17.209139,12 19,10.209139 19,8 C19,5.85780461 17.3160315,4.10892112 15.1996403,4.00489531 L15,4 Z" />
            </svg>
          </div>
        </div>
        <div className={styles.formItem}>
          <label className={styles.formLabel} htmlFor="rangePrice">
            Отклонение от средней цены
          </label>
          <div className={styles.inputContainer}>
            <input
              id="rangePrice"
              name="rangePrice"
              className={styles.formInput}
              type="text"
              placeholder="% отклонения"
              value={rangePrice}
              onChange={(e) => setRangePrice(Number(e.target.value))}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.inputIcon}
            >
              <path d="M15,2 C18.3137085,2 21,4.6862915 21,8 C21,11.2383969 18.4344251,13.8775718 15.2249383,13.9958615 L15,14 L10,14 L10,16 L14,16 C14.5522847,16 15,16.4477153 15,17 C15,17.5522847 14.5522847,18 14,18 L10,18 L10,21 C10,21.5522847 9.55228475,22 9,22 C8.44771525,22 8,21.5522847 8,21 L8,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 L8,16 L8,14 L4,14 C3.44771525,14 3,13.5522847 3,13 C3,12.4871642 3.38604019,12.0644928 3.88337887,12.0067277 L4,12 L8,12 L8,3 C8,2.44771525 8.44771525,2 9,2 L15,2 Z M15,4 L10,4 L10,12 L15,12 C17.209139,12 19,10.209139 19,8 C19,5.85780461 17.3160315,4.10892112 15.1996403,4.00489531 L15,4 Z" />
            </svg>
          </div>
        </div>
        <div className={styles.formItem}>
          <label className={styles.formLabel} htmlFor="city">
            Город
          </label>
          <div className={styles.inputContainer}>
            <input
              id="city"
              name="city"
              className={styles.formInput}
              type="text"
              placeholder="Город"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.inputIcon}
            >
              <path d="M12 3.6132812L12 28L9 28L9 23L7 23L7 28L4 28L4 46L21 46L35 46L46 46L46 15L35 15L35 11.279297L32 10.279297L32 4L30 4L30 9.6113281L28 8.9453125L28 4L26 4L26 8.2792969L12 3.6132812 z M 14 6.3886719L33 12.720703L33 44L28 44L28 40.855469C29.715786 40.405591 31 38.850301 31 37C31 34.802706 29.197294 33 27 33C24.802706 33 23 34.802706 23 37C23 38.850301 24.284214 40.405591 26 40.855469L26 44L21 44L21 28L14 28L14 6.3886719 z M 16 12L16 14L22 14L22 12L16 12 z M 16 16L16 18L31 18L31 16L16 16 z M 37 19L42 19L42 22L37 22L37 19 z M 16 20L16 22L24 22L24 20L16 20 z M 26 20L26 22L31 22L31 20L26 20 z M 16 24L16 26L31 26L31 24L16 24 z M 37 24L42 24L42 27L37 27L37 24 z M 23 28L23 30L31 30L31 28L23 28 z M 37 29L42 29L42 32L37 32L37 29 z M 8 32L11 32L11 34L8 34L8 32 z M 14 32L17 32L17 34L14 34L14 32 z M 37 34L42 34L42 37L37 37L37 34 z M 8 36L11 36L11 38L8 38L8 36 z M 14 36L17 36L17 38L14 38L14 36 z M 37 39L42 39L42 42L37 42L37 39 z M 8 40L11 40L11 42L8 42L8 40 z M 14 40L17 40L17 42L14 42L14 40 z" />
            </svg>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="region">
              Регион
            </label>
            <div className={styles.inputContainer}>
              <input
                id="region"
                name="region"
                className={styles.formInput}
                type="text"
                placeholder="Регион"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.inputIcon}
              >
                <path d="M12 3.6132812L12 28L9 28L9 23L7 23L7 28L4 28L4 46L21 46L35 46L46 46L46 15L35 15L35 11.279297L32 10.279297L32 4L30 4L30 9.6113281L28 8.9453125L28 4L26 4L26 8.2792969L12 3.6132812 z M 14 6.3886719L33 12.720703L33 44L28 44L28 40.855469C29.715786 40.405591 31 38.850301 31 37C31 34.802706 29.197294 33 27 33C24.802706 33 23 34.802706 23 37C23 38.850301 24.284214 40.405591 26 40.855469L26 44L21 44L21 28L14 28L14 6.3886719 z M 16 12L16 14L22 14L22 12L16 12 z M 16 16L16 18L31 18L31 16L16 16 z M 37 19L42 19L42 22L37 22L37 19 z M 16 20L16 22L24 22L24 20L16 20 z M 26 20L26 22L31 22L31 20L26 20 z M 16 24L16 26L31 26L31 24L16 24 z M 37 24L42 24L42 27L37 27L37 24 z M 23 28L23 30L31 30L31 28L23 28 z M 37 29L42 29L42 32L37 32L37 29 z M 8 32L11 32L11 34L8 34L8 32 z M 14 32L17 32L17 34L14 34L14 32 z M 37 34L42 34L42 37L37 37L37 34 z M 8 36L11 36L11 38L8 38L8 36 z M 14 36L17 36L17 38L14 38L14 36 z M 37 39L42 39L42 42L37 42L37 39 z M 8 40L11 40L11 42L8 42L8 40 z M 14 40L17 40L17 42L14 42L14 40 z" />
              </svg>
            </div>
          </div>
        </div>
        <input
          className={styles.inputButton}
          type="button"
          onClick={handleFilter}
          value="Поиск"
        />
        <div className={styles.sortContainer}>
          <p className={styles.sortCurrentItem} onClick={() => setHideSortList(!hideSortList)}>
            {currentSort}
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 1024 1024"
              fill="#000000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.sortIcon}
            >
              <path
                d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z"
                fill=""
              />
            </svg>
          </p>
          <ul className={`${styles.sortList} ${hideSortList && styles.sortList_hide}`}>
            {sortArray.map((item: string) => (
              <li
                id={String(sortArray.indexOf(item))}
                className={styles.sortItem}
                onClick={() => {
                  setCurrentSort(item)
                  setHideSortList(true)
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.importCsv}>Импортировать в CSV</p>
      </form>
    </div>
  );
};

export default SearchPanel;
