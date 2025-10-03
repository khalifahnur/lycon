import React from "react";

const OrganizationStructureSection = () => {
  return (
    <div className="playfair min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-3 bg-black"></div>
        <div className="absolute top-40 right-0 w-3 h-32 bg-gray-800"></div>
        <div className="absolute bottom-32 left-0 w-80 h-3 bg-gray-400"></div>
        <div className="absolute top-1/5 left-1/4 w-5 h-5 bg-black transform rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-gray-600 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/6 w-2 h-16 bg-gray-300"></div>
      </div>

      <div className="relative z-10 px-8 py-12 max-w-7xl mx-auto">
        <div className="border-b-4 border-black pb-12 mb-16">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">
              LYCAN
              <br />
              <span className="text-5xl md:text-7xl text-gray-700 font-light">
                INTERNATIONAL
              </span>
            </h1>
            <div className="w-48 h-2 bg-black mx-auto"></div>

            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light italic max-w-4xl mx-auto border-l-4 border-gray-400 pl-8">
              Building excellence through strategic leadership, operational
              expertise, and unwavering commitment to transformational growth
              across East Africa;
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black uppercase tracking-wider mb-4">
              ADVISORY BOARD
            </h2>
            <div className="w-24 h-2 bg-black mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Robert Macharia */}
            <div className="grid lg:grid-cols-3 gap-12 items-start border-t-2 border-gray-300 pt-16">
              <div className="lg:col-span-1 lg:order-2">
                <div className="bg-gray-800 text-white p-8">
                  <h3 className="text-3xl font-bold uppercase tracking-wide mb-2">
                    ROBERT MACHARIA
                  </h3>
                  <div className="w-16 h-1 bg-white"></div>
                </div>
                <div className="bg-gray-100 p-6 -mt-1">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-white p-2 text-xs">
                      <div className="font-black text-black">20+</div>
                      <div className="text-gray-600">Legal</div>
                    </div>
                    <div className="bg-white p-2 text-xs">
                      <div className="font-black text-black">CPS-K</div>
                      <div className="text-gray-600">Cert.</div>
                    </div>
                    <div className="bg-white p-2 text-xs">
                      <div className="font-black text-black">FKF</div>
                      <div className="text-gray-600">Chair</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:order-1 space-y-6">
                <div className="bg-gray-50 border-l-4 border-gray-800 p-6">
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Robert Macharia is a seasoned legal professional with over
                    20 years of progressively senior experience. His expertise
                    covers commercial litigation, gaming and ICT regulation, and
                    corporate governance. An accredited Corporate Governance
                    Auditor, CPS-K, and Notary Public, Robert has represented
                    clients in Kenya&apos;s High Court and Court of Appeal and
                    actively contributes to professional bodies including the
                    Law Society of Kenya and Institute of Certified Public
                    Secretaries.
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Over the years he has built a distinguished career spanning
                    corporate law, litigation, governance, and regulatory
                    compliance. Currently serving as Global Head of Legal,
                    Director, and Company Secretary at SportPesa Kenya and
                    Techpitch Ltd, he provides strategic legal oversight across
                    Africa and Europe. This includes contract negotiation,
                    cross-border structuring, and regulatory engagement.
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    Robert is a passionate football administrator. He is the
                    founder of Murang&apos;a Seal FC and St. Sebastian Sports School,
                    and Chairperson of the Federation of Kenyan Football (FKF)
                    Murang&apos;a County Branch, and key national committees of the
                    Federation. His expertise bridges law, business, and sport,
                    and is underpinned by a commitment to integrity, strategic
                    leadership, and community development.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-l-4 border-gray-600 p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide mb-3">
                      Legal Expertise
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Commercial Litigation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Corporate Governance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Regulatory Compliance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Cross-border Structuring</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-gray-600 p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide mb-3">
                      Sports Leadership
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>Murang&apos;a Seal FC Founder</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>St. Sebastian Co-founder</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>FKF County Chairman</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>National Committee Member</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gordon Denoon */}
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="bg-black text-white p-8">
                  <h3 className="text-3xl font-bold uppercase tracking-wide mb-2">
                    GORDON DENOON
                  </h3>
                  <div className="w-16 h-1 bg-white"></div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gray-50 border-l-4 border-black p-6">
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Gordon Denoon brings more than twenty years of seasoned
                    experience in strategic planning, operations management, and
                    business development. Born in Uganda and raised in
                    Australia, Gordon&apos;s career has been built around translating
                    complex challenges into clear, actionable strategies across
                    public service and non-governmental sectors.
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    His academic background and professional journey are rooted
                    in fostering resilience and innovation, with a passion for
                    disaster preparedness, response, and recovery. Having lived
                    and worked in Kenya for over seven years, Gordon offers a
                    deep understanding of local dynamics, cultural
                    sensitivities, and the business environment.
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    His proven strengths in stakeholder engagement, operational
                    planning, project design, and program management are
                    complemented by a disciplined approach to risk mitigation
                    and problem-solving. Gordon&apos;s diverse experience and
                    collaborative leadership style make him exceptionally
                    equipped to drive St. Sebastian Sports Academy&apos;s growth and
                    operational excellence in Kenya and the broader East African
                    region.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-l-4 border-gray-400 p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide mb-3">
                      Core Expertise
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black"></div>
                        <span>Strategic Planning & Operations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black"></div>
                        <span>Stakeholder Engagement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black"></div>
                        <span>Risk Management & Mitigation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black"></div>
                        <span>Program & Project Management</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-gray-400 p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide mb-3">
                      Specialization
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>Disaster Preparedness & Response</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>Business Development</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>Resilience & Innovation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600"></div>
                        <span>Cultural Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="bg-black text-white p-8">
                  <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">
                    CHRISTINE MACHARIA DENOON
                  </h3>
                  <div className="w-16 h-1 bg-white"></div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div className="bg-gray-50 border-l-4 border-black p-8">
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Christine Macharia Denoon brings over fifteen years of
                    leadership excellence in commercial strategy, risk
                    management, and strategic procurement to her role as Chief
                    Executive Officer. She has overseen large and complex
                    programmes across diverse international contexts,
                    demonstrating a rare ability to translate governance
                    frameworks into measurable competitive advantages.
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Christine holds an Advanced Contract and Commercial
                    Practitioner (CCMAP) accreditation, underscoring her strong
                    commercial acumen and her expertise in contract negotiation,
                    supplier relationship management, and stakeholder
                    engagement. Her career is marked by a focus on high-value
                    partnerships, business development initiatives, innovative
                    funding models, and data-driven improvements to contract
                    performance.
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    A proactive risk manager and professional member of the Risk
                    Management Institution of Australasia (RMIA), she ensures
                    contractual obligations transform into actionable
                    deliverables that drive cost savings, mitigate risks, and
                    achieve successful project execution. Her management
                    expertise, combined with a people-focused leadership style,
                    fosters continuous improvement, collaboration, and
                    sustainable growth.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border-l-4 border-black p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide text-sm mb-3">
                      Strategy & Risk
                    </h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      <div>• Commercial Strategy</div>
                      <div>• Risk Management (RMIA)</div>
                      <div>• Governance Frameworks</div>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-black p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide text-sm mb-3">
                      Commercial
                    </h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      <div>• Strategic Sourcing</div>
                      <div>• Contract Negotiation</div>
                      <div>• Supplier Relations</div>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-black p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide text-sm mb-3">
                      Leadership
                    </h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      <div>• Stakeholder Engagement</div>
                      <div>• Team Development</div>
                      <div>• Operational Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-12 items-start border-t-2 border-gray-300 pt-16">
              <div className="lg:col-span-1 lg:order-2">
                <div className="bg-gray-800 text-white p-8">
                  <h3 className="text-3xl font-bold uppercase tracking-wide mb-2">
                    BERNARD CHAURO
                  </h3>
                  <div className="w-16 h-1 bg-white"></div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:order-1 space-y-6">
                <div className="bg-gray-50 border-l-4 border-gray-800 p-6">
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Benard Chauro is a performance-driven operational manager,
                    internal auditor, and financial accountant with over a
                    decade of progressive experience in enhancing operational
                    integrity and driving organizational performance. His
                    educational foundation in finance and accounting, coupled
                    with extensive practical exposure, has equipped him with
                    keen analytical rigor and creative problem-solving
                    abilities.
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Throughout his career, Benard has demonstrated expertise in
                    designing audit programs, ensuring compliance, uncovering
                    process optimization opportunities, mastering financial
                    accounting, tax preparation, and strategic budgeting. His
                    data-driven approach to financial planning consistently
                    delivers measurable improvements in efficiency and cost
                    control.
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    As a natural leader and mentor, Benard fosters
                    high-performing teams through clear communication,
                    empowerment, and hands-on guidance, translating complex
                    financial and operational concepts into concise, actionable
                    insights for diverse stakeholders.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-l-4 border-gray-600 p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide mb-3">
                      Financial Expertise
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Audit Program Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Cost Control</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Strategic Budgeting</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Tax Preparation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800"></div>
                        <span>Process Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="bg-black text-white p-8">
                  <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">
                    TOM SIPUL
                  </h3>
                  <div className="w-16 h-1 bg-white"></div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div className="bg-gray-50 border-l-4 border-black p-8">
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Tom Sipul brings over two decades of distinguished expertise
                    in organizational management and strategic leadership to his
                    role as Chief Operating Officer. Backed by an MBA and core
                    competencies in organizational development, public sector
                    reforms, governance, program design, HR advisory, and
                    infrastructure management.
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Throughout his career, he has led major interventions in
                    strategy formulation, organizational restructuring, disaster
                    recovery, and business process re-engineering, applying
                    visionary and analytical insights to every venture. His
                    leadership style is characterized by the ability to motivate
                    and retain high-performance teams.
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    Adept at aligning organizational goals with emerging
                    technologies and governance frameworks, Tom inspires
                    cross-functional collaboration and ensures program outcomes
                    consistently exceed expectations. His technical expertise,
                    strategic mindset, and people-centered leadership optimize
                    operations and enhance service quality.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border-l-4 border-black p-4">
                    <h4 className="font-black text-gray-900 uppercase tracking-wide text-sm mb-3">
                      Operational Excellence
                    </h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      <div>• Strategy Formulation</div>
                      <div>• Organizational Development</div>
                      <div>• Process Re-engineering</div>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 border-black p-4">
                    <div className="space-y-2 text-xs text-gray-700">
                      <div>Infrastructure Management</div>
                      <div>• Team Leadership</div>
                      <div>• Governance Frameworks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t-4 border-black">
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-none">
              LEADERSHIP
              <br />
              <span className="text-gray-600 font-light">EXCELLENCE</span>
            </h2>
            <div className="w-32 h-2 bg-black mx-auto"></div>

            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed italic">
              Combining decades of international experience with deep local
              expertise to drive transformational growth and operational
              excellence across East Africa&apos;s sports and education sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationStructureSection;
