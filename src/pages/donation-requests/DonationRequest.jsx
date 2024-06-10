import SectionHeader from "../../components/SectionHeader";
import useUserDonations from "../../hooks/useUserDonations";
import DonationCard from "./DonationCard";

const DonationRequest = () => {
  const [userDonations] = useUserDonations();

  const donationsFilterData = userDonations?.filter(
    (item) => item.status.toLowerCase() == "pending"
  );



  // console.log(donationsFilterData);

  return (
    <section className="mt-32">
      {donationsFilterData.length > 0 ? (
        <>
          <div>
            <SectionHeader
              info={{
                heading: "Donation Request",
                descrip:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              }}
            ></SectionHeader>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  font-open-sans mt-20">
            {donationsFilterData?.map((item, id) => (
              <DonationCard item={item} key={id}></DonationCard>
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-center text-[30px] font-bold">No Data</h1>
      )}
    </section>
  );
};

export default DonationRequest;
