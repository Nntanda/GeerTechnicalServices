import React from 'react';
import { Droplets, HeartHandshake, Users } from 'lucide-react';

const photos = [
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.28 (1).jpeg',
    alt: 'Geer Technical and Rotary volunteers introducing the Busitema WASH project',
  },
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.28 (2).jpeg',
    alt: 'Volunteers installing the community water storage tank',
  },
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.28 (3).jpeg',
    alt: 'Geer Technical team member installing a handwashing sink',
  },
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.28.jpeg',
    alt: 'Rotaract and Geer Technical representatives meeting with the Busitema community',
  },
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.29 (1).jpeg',
    alt: 'Technicians connecting plumbing to the new water tank',
  },
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.29 (2).jpeg',
    alt: 'New handwashing basin installed as part of the WASH project',
  },
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.29 (3).jpeg',
    alt: 'Water storage tank installed at the Busitema community site',
  },
  {
    file: 'WhatsApp Image 2026-10-27 at 10.37.29.jpeg',
    alt: 'Rotaract volunteers supporting the Busitema community WASH project',
  },
];

const CommunityImpact = () => (
  <section id="community" className="overflow-hidden bg-slate-50 py-20 sm:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-700">
          <HeartHandshake className="h-4 w-4" />
          Community giveback
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 lg:text-5xl">
          Busitema University <span className="text-orange-500">WASH Project</span>
        </h2>
        <p className="mx-auto mt-6 text-lg leading-8 text-slate-600">
          Geer Technical Services was proud to contribute its skills to this transformative Water,
          Sanitation and Hygiene (WASH) project in the Busitema community. Working alongside
          Rotaract Club of Busitema University and Rotary Club of Bideford Bridge, the team
          supported practical improvements that help make clean water and hygiene facilities
          more accessible.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <span className="rounded-xl bg-blue-50 p-3 text-blue-900">
            <Droplets className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-bold text-slate-900">Clean water</h3>
            <p className="mt-1 text-sm text-slate-500">Water storage and plumbing</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <span className="rounded-xl bg-orange-50 p-3 text-orange-600">
            <HeartHandshake className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-bold text-slate-900">Better hygiene</h3>
            <p className="mt-1 text-sm text-slate-500">Handwashing facilities</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <span className="rounded-xl bg-blue-50 p-3 text-blue-900">
            <Users className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-bold text-slate-900">Local partnership</h3>
            <p className="mt-1 text-sm text-slate-500">A project built together</p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">The work in pictures</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">A community effort, lasting impact</h3>
          </div>
          <p className="text-sm text-slate-500">Busitema University · Water, Sanitation and Hygiene</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((photo) => (
            <figure key={photo.file} className="group overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={`/busitema/${encodeURIComponent(photo.file)}`}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CommunityImpact;
