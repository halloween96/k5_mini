import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MdTimer } from "react-icons/md";
import { IoBicycleSharp } from "react-icons/io5";
import axios from 'axios';
// openlayer 지도 라이브러리
import { Map as OlMap, View } from "ol";
// 기본 지도
import { defaults as defaultControls } from "ol/control";
// 좌표 변환
import { fromLonLat, get as getProjection } from "ol/proj";
// 지도 레이어 설정
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
// 지도 타일 및 벡터 데이터
import { XYZ, Vector as VectorSource } from "ol/source";
import "ol/ol.css";

export default function Road() {
    const { seq } = useParams();
    const [road, setRoad] = useState([]);
    
    // 백 서버에서 도로정보 가져오기
    const getRoad = async () => {
        const resp = await axios.get(`http://10.125.121.204:8080/roadinfo/${seq}`);
        setRoad(resp.data.body);
        // console.log("road", resp.data.body)
    };

    useEffect(() => {
        getRoad();
    }, []);

    const mapContent = useRef(null);

    // 벡터 레이어 초기화
    const initVectorLayer = new VectorLayer({
        source: new VectorSource(),
    });
    useEffect(() => {
        if (!mapContent.current) {
            return;
        }
        // openlayer 지도 생성
        const map = new OlMap({
            controls: defaultControls({ zoom: false, rotate: false }).extend([]),
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: "https://api.vworld.kr/req/wmts/1.0.0/D98ED004-263A-33BD-B98C-6569811966A9/Base/{z}/{y}/{x}.png"
                        // url:"https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
                    }),
                }),
                initVectorLayer,
            ],
            view: new View({
                // 좌표 설정
                projection: getProjection("EPSG:3857"),
                // 초기 중심 좌표
                center: fromLonLat([129.080278, 35.231489]),
                zoom: 12,
                minZoom: 1,
                maxZoom: 20,
            }),
            target: mapContent.current,
        });
        return () => map.setTarget(undefined);
    }, []);

    const level = useParams().item;
    const levlist = { '1': '매우쉬움', '2': '쉬움', '3': '보통', '4': '어려움', '5': '매우어려움' }

    let hour = parseInt(road.ete / 60);
    let minute = road.ete % 60;

    return (
        <main className='mt-72 mb-20'>
            <h1 className="p-2 text-5xl font-bold text-slate-800 border-b-2 border-slate-200 font-['Jua']">코스별 상세안내</h1>
            <div className='flex flex-col items-center'>
                <div className="my-5 flex">
                    <h1 className='text-3xl text-slate-600 font-semibold'>
                        {road.roadname} :&nbsp;
                    </h1>
                    <h2 className='text-3xl text-slate-800 font-bold'>
                        {road.courseinfo}
                    </h2>
                </div>
                <div className='mt-4 border-2 border-emerald-300 rounded-md w-full flex flex-col items-center'>
                    <div className='text-emerald-500 py-5 text-2xl font-extrabold'>
                        {road.subtitle}
                    </div>
                    <div ref={mapContent} className='w-full h-96 border-2 border-emerald-200 mb-12 relative'>
                        <div className='flex justify-evenly p-3 rounded-b-2xl absolute top-0 z-10 left-1/3 w-1/3 bg-emerald-500'>
                            <div className='text-white text-xl font-medium flex items-center'><IoBicycleSharp />{road.tlength}km</div>
                            <div className='text-white text-xl font-medium flex items-center'><MdTimer />{hour}시간{minute}분</div>
                            <div className='text-white text-xl font-medium'>{levlist[road.lev]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-10 mb-6 font-extrabold text-3xl'>
                {road.subtitle}
            </div>
            <div className='text-slate-600 font-semibold'>
                {road.info}
            </div>
        </main>
    )
}
