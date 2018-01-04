import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-explore',
	templateUrl: './explore.component.html'
})
export class ExploreComponent {
	constructor(router: Router, title: Title) {
		if(router.url === '/explore') {
			title.setTitle('Explore | NVLabs');
		}
	}
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-fundamentals',
	templateUrl: './nvp-fundamentals.component.html'
})
export class NVPFundamentalsComponent {
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-recommended-reading',
	templateUrl: './recommended-reading.component.html'
})
export class RecommendedReadingComponent {
	reviewPapers = [
		{ abbr: 'DAC 2015', 
			author: 'Liu, Yongpan, et al.',
			title: '"Ambient energy harvesting nonvolatile processors: from circuit to system."',
			booktitle: 'Proceedings of the 52nd Annual Design Automation Conference',
			year: 2015,
			link: 'https://scholar.google.com/scholar?hl=en&q=Ambient+energy+harvesting+nonvolatile+processors%3A+from+circuit+to+system&btnG=&as_sdt=1%2C5&as_sdtp='
		},
		{ abbr: 'DATE 2017', 
			author: 'Su, Fang, et al.',
			title: '"Nonvolatile processors: Why is it trending?."',
			booktitle: 'Design, Automation & Test in Europe Conference & Exhibition (DATE)',
			year: 2017,
			link: 'https://scholar.google.com/scholar?q=nonvolatile+processors%3A+why+is+it+trending&btnG=&hl=en&as_sdt=0%2C5'
		}
	];

	devicePapers = [
		{ abbr: 'JSSC 2012', 
			author: 'Chiu, Pi-Feng, et al.',
			title: '"Low store energy, low vddmin, 8t2r nonvolatile latch and sram with vertical-stacked resistive memory (memristor) devices for low power mobile applications."',
			booktitle: 'IEEE Journal of Solid-State Circuits 47.6',
			year: 2012,
			link: 'https://scholar.google.com/scholar?q=Low+store+energy%2C+low+vddmin%2C+8t2r+nonvolatile+latch+and+sram+with+vertical-stacked+resistive+memory+%28memristor%29+devices+for+low+power+mobile+applications&btnG=&hl=en&as_sdt=0%2C5&authuser=1'
		},
		{	abbr: 'JSSC 2014',
			author: 'Qazi, Masood, Ajith Amerasekera, and Anantha P. Chandrakasan.',
			title: '"A 3.4-pJ FeRAM-Enabled D Flip-Flop in 0.13-um CMOS for Nonvolatile Processing in Digital Systems."',
			booktitle: 'IEEE Journal of Solid-State Circuits 49.1',
			year: 2014,
			link: 'https://scholar.google.com/scholar?q=A+3.4-pJ+FeRAM-Enabled+D+Flip-Flop+in+0.13-%24%5Cmu%5Chbox+%7Bm%7D+%24+CMOS+for+Nonvolatile+Processing+in+Digital+Systems&btnG=&hl=en&as_sdt=0%2C5&authuser=1'
		},
		{ abbr: 'JSSC 2017', 
			author: 'Lee, Albert, et al.',
			title: '"A ReRAM-Based Nonvolatile Flip-Flop With Self-Write-Termination Scheme for Frequent-OFF Fast-Wake-Up Nonvolatile Processors."',
			booktitle: 'IEEE Journal of Solid-State Circuits 52.8',
			year: 2017,
			link: 'https://scholar.google.com/scholar?hl=en&authuser=1&q=A+ReRAM-Based+Nonvolatile+Flip-Flop+With+Self-Write-Termination+Scheme+for+Frequent-OFF+Fast-Wake-Up+Nonvolatile+Processors&btnG=&as_sdt=1%2C5&as_sdtp='
		},
		{ abbr: 'TCAS-I 2017', 
			author: 'Li, Xueqing, et al.',
			title: '"Advancing Nonvolatile Computing With Nonvolatile NCFET Latches and Flip-Flops."',
			booktitle: 'IEEE Transactions on Circuits and Systems I: Regular Papers',
			year: 2017,
			link: 'https://scholar.google.com/scholar?q=Advancing+Nonvolatile+Computing+With+Nonvolatile+NCFET+Latches+and+Flip-Flops&btnG=&hl=en&as_sdt=0%2C5&authuser=1'
		}
	];

	architecturePapers = [
		{ abbr: 'TVLSI 2014', 
			author: 'Wang, Yiqun, et al.',
			title: '"Pacc: A parallel compare and compress codec for area reduction in nonvolatile processors"',
			booktitle: 'IEEE Transactions on Very Large Scale Integration (VLSI) Systems 22.7',
			year: 2015,
			link: 'https://scholar.google.com/scholar?q=Pacc%3A+A+parallel+compare+and+compress+codec+for+area+reduction+in+nonvolatile+processors&btnG=&hl=en&as_sdt=0%2C5'
		},
		{ abbr: 'HPCA 2015, Best Paper Award', 
			author: 'Ma, Kaisheng, et al.',
			title: '"Architecture exploration for ambient energy harvesting nonvolatile processors."',
			booktitle: 'High Performance Computer Architecture (HPCA), 2015 IEEE 21st International Symposium on',
			year: 2015,
			link: 'https://scholar.google.com/scholar?q=Architecture+exploration+for+ambient+energy+harvesting+nonvolatile+processors&btnG=&hl=en&as_sdt=0%2C5'
		},
		{ abbr: 'Micro 2015, Top Pick', 
			author: 'Ma, Kaisheng, et al.',
			title: '"Nonvolatile processor architecture exploration for energy-harvesting applications"',
			booktitle: 'IEEE Micro 35.5',
			year: 2015,
			link: 'https://scholar.google.com/scholar?q=Nonvolatile+Processor+Architecture+Exploration+for+Energy-Harvesting+Applications&btnG=&hl=en&as_sdt=0%2C5'
		},
		{ abbr: 'ASP-DAC 2017', 
			author: 'Ma, Kaisheng, et al.',
			title: '"Spendthrift: Machine learning based resource and frequency scaling for ambient energy harvesting nonvolatile processors."',
			booktitle: 'Design Automation Conference (ASP-DAC), 2017 22nd Asia and South Pacific',
			year: 2017,
			link: 'https://scholar.google.com/scholar?hl=en&q=Spendthrift%3A+Machine+learning+based+resource+and+frequency+scaling+for+ambient+energy+harvesting+nonvolatile+processors&btnG=&as_sdt=1%2C5&as_sdtp='
		}
	];

	systemPapers = [
		{ abbr: 'ESSCIRC 2012, The First Nonvolatile Processor', 
			author: 'Wang, Yiqun, et al.',
			title: '"A 3us wake-up time nonvolatile processor based on ferroelectric flip-flops."',
			booktitle: 'Proceedings of ESSCIRC',
			year: 2012,
			link: 'https://scholar.google.com/scholar?q=A+3us+wake-up+time+nonvolatile+processor+based+on+ferroelectric+flip-flops&btnG=&hl=en&as_sdt=0%2C5'
		},
		{ abbr: 'ISSCC 2014, MRAM-Based Nonvolatile Processor', 
			author: 'Sakimura, Noboru, et al.',
			title: '"A 90nm 20MHz fully nonvolatile microcontroller for standby-power-critical applications."',
			booktitle: 'Solid-State Circuits Conference Digest of Technical Papers (ISSCC)',
			year: 2014,
			link: 'https://scholar.google.com/scholar?q=A+90nm+20MHz+Fully+Nonvolatile+Microcontroller+for+Standby-+Power-Critical+Applications&btnG=&hl=en&as_sdt=0%2C5'
		},
		{ abbr: 'ISSCC 2016, ReRAM-Based Nonvolatile Processor', 
			author: 'Liu, Yongpan, et al.',
			title: '"A 65nm ReRAM-enabled nonvolatile processor with 6× reduction in restore time and 4× higher clock frequency using adaptive data retention and self-write-termination nonvolatile logic."',
			booktitle: 'Solid-State Circuits Conference Digest of Technical Papers (ISSCC)',
			year: 2016,
			link: 'https://scholar.google.com/scholar?q=4.7+A+65nm+ReRAM-enabled+nonvolatile+processor+with+6%C3%97+reduction+in+restore+time+and+4%C3%97+higher+clock+frequency+using+adaptive+data+retention+and+self-write-termination+nonvolatile+logic&btnG=&hl=en&as_sdt=0%2C5'
		},
		{ abbr: 'VLSI-C 2017, Nonvolatile System-On-Chip', 
			author: 'Wang, Zhibo, et al.',
			title: '"A 130nm FeRAM-based parallel recovery nonvolatile SOC for normally-OFF operations with 3.9× faster running speed and 11× higher energy efficiency using fast power-on detection and nonvolatile radio controller."',
			booktitle: 'Symposium on VLSI Circuits',
			year: 2017,
			link: 'https://scholar.google.com/scholar?q=A+130nm+FeRAM-based+parallel+recovery+nonvolatile+SOC+for+normally-OFF+operations+with+3.9%C3%97+faster+running+speed+and+11%C3%97+higher+energy+efficiency+using+fast+power-on+detection+and+nonvolatile+radio+controller&btnG=&hl=en&as_sdt=0%2C5&as_ylo=2017'
		},
		{ abbr: 'VLSI-C 2017, Nonvolatile Intelligent Processor', 
			author: 'Su, Fang, et al.',
			title: '"A 462GOPs/J RRAM-based nonvolatile intelligent processor for energy harvesting IoE system featuring nonvolatile logics and processing-in-memory."',
			booktitle: 'Symposium on VLSI Circuits',
			year: 2017,
			link: 'https://scholar.google.com/scholar?q=A+462GOPs%2FJ+RRAM-based+nonvolatile+intelligent+processor+for+energy+harvesting+IoE+system+featuring+nonvolatile+logics+and+processing-in-memory&btnG=&hl=en&as_sdt=0%2C5'
		}
	];
	softwarePapers = [
		{ abbr: 'DAC 2015', 
			author: 'Xie, Mimi, et al.',
			title: '"Fixing the broken time machine: Consistency-aware checkpointing for energy harvesting powered non-volatile processor." ',
			booktitle: 'Proceedings of the 52nd Annual Design Automation Conference',
			year: 2015,
			link: 'https://scholar.google.com/scholar?q=Fixing+the+broken+time+machine%3A+Consistency-aware+checkpointing+for+energy+harvesting+powered+non-volatile+processor&btnG=&hl=en&as_sdt=0%2C5&authuser=1'
		},
		{	abbr: 'RFID 2015',
			author: 'Naderiparizi, Saman, et al.',
			title: '"Wispcam: A battery-free rfid camera."',
			booktitle: 'RFID (RFID), 2015 IEEE International Conference on',
			year: 2015,
			link: 'https://scholar.google.com/scholar?q=Wispcam%3A+A+battery-free+rfid+camera&btnG=&hl=en&as_sdt=0%2C5&authuser=1'
		},
		{ abbr: 'ASP-DAC 2015', 
			author: 'Xie, Mimi, et al.',
			title: '"Checkpoint-aware instruction scheduling for nonvolatile processor with multiple functional units."',
			booktitle: 'Design Automation Conference (ASP-DAC), 2015 20th Asia and South Pacific',
			year: 2015,
			link: 'https://scholar.google.com/scholar?q=Checkpoint-aware+instruction+scheduling+for+nonvolatile+processor+with+multiple+functional+units&btnG=&hl=en&as_sdt=0%2C5&authuser=1'
		},
		{ abbr: 'DAC 2017', 
			author: 'Li, Jing, et al.',
			title: '"Maximizing Forward Progress with Cache-aware Backup for Self-powered Non-volatile Processors."',
			booktitle: 'Proceedings of the 54th Annual Design Automation Conference 2017',
			year: 2017,
			link: 'https://scholar.google.com/scholar?q=Maximizing+Forward+Progress+with+Cache-aware+Backup+for+Self-powered+Non-volatile+Processors&btnG=&hl=en&as_sdt=0%2C5&authuser=1'
		}
	];
	constructor(title:Title){
		title.setTitle('Recommended Reading | NVLabs');
	}
}

