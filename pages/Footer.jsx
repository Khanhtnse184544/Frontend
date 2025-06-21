import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-8">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181317338-node-I74%3A963%3B74%3A933-1750181317853.png"
              alt="Footer Logo"
              className="w-[209px] h-[209px]"
            />
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-xl font-krub font-semibold mb-2">
                  E.C.O
                </h3>
                <p className="text-gray-300 text-sm font-krub">
                  Ecological Conservation Operation
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg font-krub font-medium mb-2">
                  Tools
                </h4>
                <p className="text-gray-300 text-sm font-krub">
                  Forest Management
                  <br />
                  Community Building
                  <br />
                  Education Programs
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-lg font-krub font-medium mb-2">
                  Connect
                </h4>
                <p className="text-gray-300 text-sm font-krub">
                  info@eco-vietnam.org
                  <br />
                  +84 123 456 789
                  <br />
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-6 flex items-center justify-between">
          <p className="text-gray-400 text-sm font-krub">
            © 2024 E.C.O. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181322421-node-I4%3A284%3B4%3A192%3B4%3A145-1750181323013.png"
              alt="Facebook"
              className="w-7 h-7"
            />
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181323352-node-I4%3A284%3B4%3A200%3B4%3A168-1750181323949.png"
              alt="Twitter"
              className="w-7 h-7"
            />
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181324296-node-I4%3A284%3B4%3A269-1750181324884.png"
              alt="Instagram"
              className="w-7 h-7"
            />
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2ye3WgD0iRRiytKNOB242FKGlHz-1750181321510-node-I4%3A284%3B4%3A128%3B4%3A79-1750181322102.png"
              alt="LinkedIn"
              className="w-7 h-7"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
