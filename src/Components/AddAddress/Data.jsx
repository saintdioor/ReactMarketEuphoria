import InputInfo from "./InputInfo";
import InputInfoDelivery from "./InputInfoDelivery";
import CheckBox from "./CheckBox";
import style from "./Data.module.css";
export default function Data() {
  return (
    <div>
      <div>
        <h1 className={style.name}>My Info</h1>
        <p className={style.description}>Add Address</p>
      </div>
      <form action="" method="get">
        <div className={style.inputs}>
          <InputInfo
            id={"firstname"}
            name={"First Name*"}
            description={"First Name"}
            required={"required"}
          />
          <InputInfo
            id={"lastname"}
            name={"Last Name*"}
            description={"Last Name"}
            required={"required"}
          />
          <InputInfo
            id={"countryregion"}
            name={"Country / Region*"}
            description={"Country / Region"}
            required={"required"}
          />
          <InputInfo
            id={"companyname"}
            name={"Company Name"}
            description={"Company (optional)"}
          />
          <InputInfo
            id={"streetadress"}
            name={"Street Address*"}
            description={"House number and street name"}
            required={"required"}
          />
          <InputInfo
            id={"xzchtoeto"}
            name={"Apt, suite, unit"}
            description={"apartment, suite, unit, etc. (optional)"}
          />
          <InputInfo
            id={"city"}
            name={"City"}
            description={"Town / City"}
          />
          <InputInfo
            id={"state"}
            name={"State*"}
            description={"State"}
            required={"required"}
          />
          <InputInfo
            id={"phone"}
            name={"Phone*"}
            description={"Phone"}
            required={"required"}
          />
          <InputInfo
            id={"postcode"}
            name={"Postal Code*"}
            description={"Postal Code"}
            required={"required"}
          />
        </div>
        <InputInfoDelivery
          id={"infodelivery"}
          name={"Delivery Instruction"}
          description={"Delivery Instruction"}
        />
        <CheckBox
          id={"defaultShippingAddress"}
          description={"Set as default shipping address"}
        />
        <CheckBox
          id={"defaultBillingAddress"}
          description={"Set as default billing address"}
        />
        <div className={style.buttons}>
          <div className={style.button}>
            <button className={style.submit} type="submit">
              Save
            </button>
          </div>
          <div className={style.button}>
            <button className={style.reset} type="reset">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
