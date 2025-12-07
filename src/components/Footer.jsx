import { Facebook, Youtube, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" transition-colors duration-200">
      <div className="container mx-auto px-4 py-6 sm:py-10">
        {/* Social Media Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-10 mb-8 sm:mb-12">
          <a 
            target='_blank' 
            href="https://www.facebook.com/happydellstore/" 
            className=" hover:text-sky-600 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Facebook</span>
          </a>
          <a 
            target='_blank' 
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B918295567999%26context%3DAfdgvukjhLFLg_yrF0DkU1Ny5CLUSKbYMSY-DKreEaLsmghPMb7REOQ96i75DpJC1qDbGrPjr6rN21xwUwTdLmtJfKeTWAiYKD1ygHYhXa_74x0m7ko3ZoaWjSqFtAcnZjNYbZbBNCLW2WALNWh8f5YpaA%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwZXh0bgNhZW0CMTAAAR0rvcZ3gd0jSwMU6Ui7pbwdYBKiz9guXsvmpUHlmdWUIccxakSQ0qHEnY8_aem_h8gfU0BrcVVHq6ErLhdwng&h=AT3YfL32hUU5tvp6Z7MBMKAZVDNvchhzuDz7eZLQe04m3zchXqRI5KuQGpOIZNVvyVEGxWCPjUwMAYaYMfIKo_ZzbRs056fr40BzkURuu1L6nkHK38TKtkKCR8iK9-D8fdbLuG8trCePqrYgNaiKng" 
            className=" hover:text-green-400 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">WhatsApp</span>
          </a>
          <a 
            target='_blank' 
            href="https://www.youtube.com/@happylaptopsandcomputer" 
            className=" hover:text-red-400 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Youtube</span>
          </a>
          <a 
            target='_blank' 
            href="https://www.instagram.com/happy.laptops.and.computer/" 
            className=" hover:text-pink-400 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 ">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Happy Laptops and Computers. All rights reserved.</p>
          <p className="text-center text-xs text-gray-400 mt-6 italic ">
  Crafted with love ❤️ & code by <a className='hover:underline text-red-500' href="https://www.rishiyadav.me/"><span className="text-red-500 font-medium">Rishi Yadav</span></a>
</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer