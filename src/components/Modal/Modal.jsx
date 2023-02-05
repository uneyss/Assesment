import CheckMarkModal from "../../svg/checkmark_modal.svg";

const Modal = ({ data, id, closeModal }) => {
    {/* 
        Bu kısımda seçtiğimiz karttaki id ve data.js'teki bilgiler Modal Screen açılırken console da yazdırılıyor. 
    */} 
  console.log(id);
  console.log("Data:", data);

  return (
    
    <div className="flex flex-col justify-center  ml-[30rem] mt-[20rem] w-[38.25rem] h-[44rem]  items-center p-6 gap-4 absolute  bg-[#FFFFFF] gray-200 z-10 ">
        {/* Not Modal Screen'i mobile full screen responsive yaptım fakat, pc ekranında renderlarken bg kısmında sıkıntı çıktı.  
            Üzerinde uzun süre uğraştım fakat çözemedim TailwindCss ilk kez kullanmamdan ve süremin bitmesinden dolayı.
            Responsive mobile fullscreen için yazdığım kod bu klasörde ResponsiveModal.jsx dosyası içerisinde sm: tagleriyle yazdım.
        */} 

        {/* Content */} 
      <div className="flex flex-col items-start p-6 gap-5 w-[36.25rem] h-[28.625rem] flex-none order-none self-stretch grow-0 ">
        
        {/* Card Mockup */} 
        <div className="w-[34.25rem] h-[7.625rem] flex-none order-none self-stretch grow-0 ">
          <img
            src={CheckMarkModal}
            alt="checkmark"
            className="mr-2 inline w-[34.25rem] h-[7rem] flex-none  self-stretch grow-0 "
          />
        </div>
        
        {/* Text And Supporting Text */} 
        <div className="flex flex-col items-start p-0 gap-2 w-[34.25rem] h-[7rem] flex-none order-1 self-stretch grow-0 ">
          <p className="w-[34.25rem] h-[1.5rem] font-roboto not-italic font-semibold text-base text-center text-[#020246] flex-none order-none self-stretch grow-0 ">
            Bu siparişi verdiğiniz için çok teşekkürler.
          </p>
          <p className="w-[34.25rem] h-[5rem] font-roboto font-medium text-sm text-center text-[#111729] flex-none order-1 selff-stretch grow-0">
            <strong>FIX123456</strong> sipariş numaralı sigorta paketiniz ürününüzle başarıyla
            eşleştirildi. Aşağıda sipariş hakkında tüm detayları bulacaksınız.
            Kafanıza takılan herhangi bir sorunuz olursa canlı sohbet üzerinden
            7/24 iletişime geçebilirsiniz. Bu arada, satın alınımızı
            paylaşabilir ve mağaza kredisi kazanabilirsiniz.
          </p>
        </div>
        
        {/* Line */} 
        <hr className="w-[34.25rem] h-0 gray-200 flex-none order-2 self-stretch grow-0 " />
        
        {/* Order Summary */} 
        <div className="flex flex-row items-start px-0 py-2.5 gap-2.5 w-[5.688] h-[2.75rem] flex-none order-3 grow-0">
          <p className="w-[5.688rem] h-[1.5rem] font-roboto not-italic text-base flex-none order-none grow-0">
            Sipariş Özeti
          </p>
        </div>
        
        {/* Bottom Section */} 
        <div className="border-box flex flex-row items-start p-6 gap-2 w-[34.25rem] h-[6.25rem] bg-[#F9FAFC] gray-200 flex-none order-4 self-stretch grow-0 ">
          <div className="flex flex-row items-center py-3 px-4 gap-2 w-[31.25rem] h-[3.25rem] flex-none order-none self-stretch grow ">
            <p className="w-[14.375rem] h-[1.5rem] font-roboto not-italic font-medium text-base text-[#364153] flex-none order-none grow ">
              {data.title}
            </p>
            <p className="w-[14.375rem] h-[1.75rem] font-roboto not-italic font-semibold text-lg text-right text-[#111729] flex-none order-1 grow ">
              ₺{data.price},00
            </p>
          </div>
        </div>

        {/* Button */} 
        <div className="flex flex-row justify-center items-center py-3 px-5 gap-2 w-[34.25rem] h-[3rem] bg-[#0049E6] text-[#FFFFFF] font-roboto shadow-sm rounded-lg flex-none order-5 self-stretch grow-0 sm:w-[21.75rem]">
          <button  onClick={closeModal}>Uygulamaya Dön</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
